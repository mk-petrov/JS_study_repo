$(() => {
    // Application constants
    const baseUrl = 'https://baas.kinvey.com/appdata/kid_r1wrIuDG7/';
    const username = 'pecata';
    const password = 'pe';


    // Attach event listeners
    $('#btnLoad').click(loadPosts);
    $('#btnView').click(viewPost);

    // DOM elements
    const list = $('#selected');

    function loadPosts() {
        //Request all post from database and display inside <select>
        $.ajax({
            url: baseUrl + 'articles',
            headers: {
                'Authorization': 'Basic ' + btoa(username + ':' + password)
            }
        })
            .then(fillSelect)
            .catch(handleError);


        //this function will be called only when btnLoad is pressed, so can be internal for loadPosts
        function fillSelect(data) {
            list.empty();
            for (let post of data) {
                $('<option>').text(post.title).val(post._id).appendTo(list);
            }
        }
    }

    function viewPost() {
        //Request only selected post from database and all associated comments
        //Display post body and comments
    }

    function handleError(reason) {
        console.log(reason);
    }
});