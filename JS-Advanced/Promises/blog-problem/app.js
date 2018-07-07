$(() => {
    // Application constants
    const baseUrl = 'https://baas.kinvey.com/appdata/kid_r1wrIuDG7/';
    const username = 'pecata';
    const password = 'pe';


    // Attach event listeners
    $('#btnLoad').click(loadPosts);
    $('#btnView').click(viewPost);

    // DOM elements
    const select = $('#selected');
    const content = $('#content');

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
            select.empty();
            for (let post of data) {
                $('<option>').text(post.title)
                    .val(post._id) // make the id of the post as value of each option to know which option is selected
                    .appendTo(select);
            }
        }
    }

    function viewPost() {
        //Request only selected post from database and all associated comments
        let postId = select.find('option:selected').val();   //returns the selected option(or array if multiselection is on)
        let req = {
            url: baseUrl + 'articles/' + postId,
            headers: {
                'Authorization': 'Basic ' + btoa(username + ':' + password)
            }
        };

        //sync promise chain
        $.ajax(req)                  // REQUEST the Article
            .then(requestComments)   // REQUEST the comments of this article
            .then(displayPostAndComments)
            .catch(handleError);

        function requestComments(data) {
            return new Promise(function (resolve, reject) {
                $.ajax({
                    url: baseUrl + `comments/?query={"postId":"${postId}"}`,
                    headers: {
                        'Authorization': 'Basic ' + btoa(username + ':' + password)
                    }
                }).then((response) => resolve([data, response]));
            });
        }

        //Display post body and comments
        function displayPostAndComments([data, comments]) {
            content.empty();
            content.append($(`<h1>${data.title}</h1>`));
            content.append($(`<p>${data.body}</p>`));
            content.append($('<h2>Comments</h2>'));
            let list = $('<ul>');
            for (let comment of comments){
                list.append($(`<li>${comment.text}</li>`));
            }
            if (comments.length === 0){
                list.append($('<li>No comments yet</li>'));
            }

            content.append(list);
        }
    }

    function handleError(reason) {
        console.log(reason);
    }
});