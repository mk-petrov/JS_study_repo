$(() => {
    //the function is called 4 times: refresh->setGreeting; login/register->setStorage->setGreeting; logout->setGreeting
    setGreeting();

    // in case we want to login the user every time
    //localStorage.clear();

    // APP constants
    const baseUrl = 'https://baas.kinvey.com/';
    const appKey = 'kid_B1vXHnE77';
    const appSecret = '572744df7afd49aea600badf124d4ab0';

    // DOM elements
    let loadingBox = $('#loadingBox');
    let infoBox = $('#infoBox');
    let errorBox = $('#errorBox');


    // Attach even listeners
    $('#linkHome').click(() => showView('home'));
    $('#linkLogin').click(() => showView('login'));
    $('#linkRegister').click(() => showView('register'));
    $('#linkBooks').click(() => showView('books'));
    $('#linkCreate').click(() => showView('create'));
        // the easy way but the token is active on the server
        //$('#linkLogout').click(() => {localStorage.clear(); showView('home')});
    $('#linkLogout').click(logout);
    infoBox.click((e) => $(e.target).hide());
    errorBox.click((e) => $(e.target).hide());


    $('#formLogin').submit((e) => {e.preventDefault(); login()});
    $('#formRegister').submit(register);
    $('#formCreateBook').submit(createBook);

    // ON request start and stop
    $(document).on({
        ajaxStart: () => loadingBox.show(),
        ajaxStop: () => loadingBox.hide()
    });

    function showInfo(message) {
        infoBox.text(message);
        infoBox.show();
        setTimeout(() => infoBox.fadeOut(), 3000);
    }

    //no timer, to give the user time to read the message error
    function showError(message) {
        errorBox.text(message);
        errorBox.show();
    }

    function handleError(reason) {
        showError(reason.responseJSON.description);
    }

    // Navigation and header; Hide everything and show only the desired one
    function showView(name) {
        $('section').hide();

        switch (name) {
            case 'home': $('#viewHome').show(); break;
            case 'login': $('#viewLogin').show(); break;
            case 'register': $('#viewRegister').show(); break;
            case 'books': getBooks(); $('#viewBooks').show(); break;
            case 'create': $('#viewCreate').show(); break;
            case 'logout': $('#viewLogout').show(); break;
        }
    }

    function request(uri, method, data) {
        let req = {
            url: baseUrl + uri,
            method: method,
            headers: {
                'Authorization': ''
            }
        };

        if (data !== undefined){
            req.data = JSON.stringify(data);
        }

        return $.ajax(req);
    }

    // User session
    function setGreeting() {
        let username = localStorage.getItem('username');
        if(username !== null){
            $('#loggedInUser').text(`Welcome, ${username}!`);
            $('#linkLogin').hide();
            $('#linkRegister').hide();
            $('#linkBooks').show();
            $('#linkCreate').show();
            $('#linkLogout').show();
        } else {
            $('#loggedInUser').text('');
            $('#linkLogin').show();
            $('#linkRegister').show();
            $('#linkBooks').hide();
            $('#linkCreate').hide();
            $('#linkLogout').hide();
        }
    }
    
    function setStorage(data) {
        localStorage.setItem('authtoken', data._kmd.authtoken);
        localStorage.setItem('username', data.username);
        localStorage.setItem('userId', data._id);
        $('#loggedInUser').text(`Welcome, ${data.username}!`);
        setGreeting();
        showView('books');
    }
    
    function login() {
        let username = $("[name = 'username']").val();
        let password = $("[name = 'passwd']").val();

        let req = {
            url: baseUrl + 'user/' + appKey + '/login',
            method: 'POST',
            headers: {
                'Authorization': 'Basic ' + btoa(appKey + ':' + appSecret),
                'Content-Type': 'application/json'
            },
            data: JSON.stringify({
                username: username,
                password: password
            }),
            success: (data) => { showInfo('Login successful'); setStorage(data)},
            error: handleError
        };

        $.ajax(req);
    }

    function register(e) {
        e.preventDefault();
        let username = $("[name = 'usernameR']").val();
        let password = $("[name = 'passwdR']").val();
        let passwordRepeat = $("[name = 'passwdRepeat']").val();

        if(username.length === 0){
            showError("Username cannot be empty");
            return;
        }

        if(password.length === 0){
            showError("Password cannot be empty");
            return;
        }

        if(password !== passwordRepeat){
            showError("Passwords don't match!");
            return;
        }

        let req = {
            url: baseUrl + 'user/' + appKey,
            method: 'POST',
            headers: {
                'Authorization': 'Basic ' + btoa(appKey + ':' + appSecret),
                'Content-Type': 'application/json'
            },
            data: JSON.stringify({
                username: username,
                password: password
            }),
            success: (data) => { showInfo('Registration successful'); setStorage(data)},
            error: handleError
        };

        $.ajax(req);
    }
    
    function logout() {
        let req = {
            url: baseUrl + 'user/' + appKey + '/_logout',
            method: 'POST',
            headers: {
                'Authorization': 'Kinvey ' + localStorage.getItem('authtoken'),
            },
            success: logoutSuccess,
            error: handleError
        };

        $.ajax(req);

        function logoutSuccess(data) {
            localStorage.clear();
            setGreeting();
            showView('home');
        }
    }

    // Catalog
    
    function getBooks() {
        let req = {
            url: baseUrl + 'appdata/' + appKey + '/books',
            headers: {
                'Authorization': 'Kinvey ' + localStorage.getItem('authtoken'),
            },
            success: displayBooks,
            error: handleError
        };

        $.ajax(req);

        function displayBooks(data) {
            let tbody = $('#viewBooks').find('table').find('tbody');
            tbody.empty();

            for (let book of data){
                // Add delete and edit btns if the books are created by the same user
                let actions = [];
                if(book._acl.creator === localStorage.getItem('userId')){
                    actions.push($('<button class="edit">&#9998;</button>').click(() => editBook(book._id)));
                    actions.push($('<button class="delete">&#10006;</button>').click(() => deleteBook(book._id)));
                }

                let row = $('<tr>');
                row.append(`<td>${book.title}</td>`);
                row.append(`<td>${book.author}</td>`);
                row.append(`<td>${book.description}</td>`);
                row.append($('<td>').append(actions));

                row.appendTo(tbody);
            }
        }
    }

    function createBook(e) {
        e.preventDefault();
        let createBookForm = $('#formCreateBook');
        let title = createBookForm.find("[name = 'title']").val();
        let author = createBookForm.find("[name = 'author']").val();
        let description = createBookForm.find("[name = 'description']").val();

        if(title.length === 0){
            showError("Book title cannot be empty");
            return;
        }

        if(author.length === 0){
            showError("Book author cannot be empty");
            return;
        }

        let req = {
            url: baseUrl + 'appdata/' + appKey + '/books',
            method: 'POST',
            headers: {
                'Authorization': 'Kinvey ' + localStorage.getItem('authtoken'),
                'Content-Type': 'application/json'                      // Don't forget it !!!!!
            },
            data: JSON.stringify({
                title: title,
                author: author,
                description: description
            }),
            success: () => { showInfo('Book created'); showView('books')},
            error: handleError
        };

        $.ajax(req);
    }

    function editBook(id) {
        console.log('Edit');
    }

    function deleteBook(id) {

        let req = {
            url: baseUrl + 'appdata/' + appKey + '/books/' + id,
            method: 'DELETE',
            headers: {
                'Authorization': 'Kinvey ' + localStorage.getItem('authtoken'),
                'Content-Type': 'application/json'                      // Don't forget it !!!!!
            },
            success: deleteSuccess,
            error: handleError
        };

        $.ajax(req);

        function deleteSuccess(data) {
            console.log(data);
            // showInfo(`Book "${data.title}" deleted`);
            // showView('books');
        }
    }
});