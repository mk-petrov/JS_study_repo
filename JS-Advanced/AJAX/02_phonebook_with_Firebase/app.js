//document.onload
$(() => {
    const baseUrl = "https://phonebook-8a1e6.firebaseio.com/phonebook";
    const list = $('#list');
    const btnCreate = $('#btnCreate');
    list.text('Loading ...');
    btnCreate.on('click', create);
    loadContacts();

    function loadContacts() {
        let req = {
            url: baseUrl + ".json",
            method: 'GET',
            success: displayContacts,
            error: displayError
        };

        $.ajax(req);
    }

    function displayContacts(data) {
        list.empty();
        for (let contact in data){  //contacts are keys
            let html = $(`<li><span>${data[contact].name}:  ${data[contact].phone}</span> </li>`);
            html.append($('<button>Delete</button>').click( () => deleteContact(contact)));
            list.append(html);
        }
    }
    
    function create() {
        //validation input
        let name = $('#crtName').val();
        let phone = $('#crtPhone').val();
        if(name.length === 0){
            notify('Name cannot be empty', 'error');
            return;
        }
        if(phone.length === 0){
            notify('Phone cannot be empty', 'error');
            return;
        }

        //turn btn off and send req
        btnCreate.prop('disabled', true);
        let contact = {
            name,
            phone
        };

        let req = {
            url: baseUrl + ".json",
            method: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(contact),
            success: () => {
                //clear the input field only if the form is correct
                $('#crtName').val('');
                $('#crtPhone').val('');
                notify('Created', 'success');
                loadContacts()
            },
            error: displayError,
            complete: () => btnCreate.prop('disabled', false)
        };

        $.ajax(req);
    }
    
    function deleteContact(contact) {
        let req = {
            url: `${baseUrl}/${contact}.json`,
            method: "DELETE",
            success: () => { notify("Deleted", 'info'); loadContacts()},
            error: displayError
        };

        $.ajax(req);
    }

    function displayError(err) {
        notify(`Error: ${err.statusText}`, 'error');
    }

    function notify(mesage, type) {
        let toast = document.getElementById('notification');
        toast.textContent = mesage;
        toast.style.display = 'block';

        switch(type){
            case 'error': toast.style.backgroundColor = '#F04532'; break;
            case 'info': toast.style.backgroundColor = '#60a9f0'; break;
            case 'success': toast.style.backgroundColor = '#21f07a'; break;
        }
        setTimeout(() => toast.style.display = 'none', 2000);
    }
});

