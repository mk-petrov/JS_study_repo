//XHR - XMLHttpRequest
function loadReposJS() {
    let req = new XMLHttpRequest();
    req.onreadystatechange = function () {
        if(req.readyState === 4 && req.status === 200){
            let repos = JSON.parse(req.responseText);
            display(repos);
        } else if(req.status === 404){
            document.getElementById('result').textContent = "Error - Not Found!";
        }
    };
    
    function display(repos) {
        let output = document.getElementById('result');
        output.innerHTML = '<ul>';
        output.innerHTML += '<p>Content loaded with JavaScript</p>';
        for(let repo of repos){
            output.innerHTML += `<li>${repo.name}</li>`;
        }
        output.innerHTML += '</ul>';
    }

    //prepare the request
    //true parameter is for async; false is sync
    req.open("GET", "https://api.github.com/users/testnakov/repos", true);

    //send the request
    req.send();

}