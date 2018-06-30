function loadUserRepos() {
    $('#result').text('Loading...');
    $('#btnLoad').prop('disabled', true);
    let username = $('#user').val();

    let request = {
        url: `https://api.github.com/users/${username}/repos`,
        method: "GET",
        success: display,
        error: onError,
        complete: () => $('#btnLoad').prop('disabled', false)
    };
    $.ajax(request);
}

function onError(err) {
    $('#result').text('Error: ' + err.statusText);
    //console.log();
}

function display(repos) {
    let output = $('#result');
    let list = $('<ul>');
    for(let repo of repos){
        $(`<li><a href="${repo.html_url}" target="_blank">${repo.name}</a></li>`).appendTo(list);
    }
    output.html(list);
}