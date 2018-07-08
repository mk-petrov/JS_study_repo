$(() => {
    // Application constants
    const baseUrl = 'https://baas.kinvey.com/appdata/kid_r1wrIuDG7/';
    const username = 'pecata';
    const password = 'pe';


    //$('#btnLoad').click(loadPosts);   //removed the load btn, on load is triggered the event
    //$('#btnView').click(viewPost);    //removed the view btn, on option change is triggered the event

    // DOM elements
    const select = $('#selected');
    const content = $('#content');

    // Attach event listeners
    select.on('change', viewPost);

    loadPosts();   // because load btn is removed


    function request(endpoint) {
        return $.ajax({
            url: baseUrl + endpoint,
            headers: {
                'Authorization': 'Basic ' + btoa(username + ':' + password)
            }
        });
    }

    function loadPosts() {
        select.empty();
        select.append($('<option>Loading...</option>'));
        select.prop('disabled', true);
        //Request all post from database and display inside <select>

        request('articles')
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
            // IF there are at least 1 article
            if(data.length !== 0){
                viewPost();
            }

            select.prop('disabled', false);
        }
    }

    function viewPost() {
        content.empty();
        content.append($('<span>Loading...</span>'));
        //Request only selected post from database and all associated comments
        let postId = select.find('option:selected').val();
        let postP = request('articles/' + postId);
        let commentsP = request(`comments/?query={"postId":"${postId}"}`);

        // array from promises, not data!
        Promise.all([postP, commentsP])
            .then(displayPostAndComments)
            .catch(handleError);


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
        content.html(`<p>Error: ${reason.statusText}</p>`);
    }
});