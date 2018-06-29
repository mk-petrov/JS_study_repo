function loadReposJQ() {
    //$.get; $.put or $.ajax -> universal method
    //$.get("https://api.github.com/users/testnakov/repos").then(display);

    //or with .ajax -> receives a object with properties
    let request = {
        url: "https://api.github.com/users/testnakov/repos",
        method: "GET",  //by default is get, so can be omitted
        success: display,
        error: (e) => console.log('Error' + e)   //test the current api error structure
    };  //it's good practise to make the request outside ajax, because can be used decorator functions: functions,
    // that will add parts to the request for the use case like: headers etc

    //.then() is not needed, because success is defined in the request object
    $.ajax(request);
}

function display(repos) {
    let output = document.getElementById('result');
    output.innerHTML = '<ul>';
    output.innerHTML += '<p>Content loaded with Jquery</p>';
    for(let repo of repos){
        output.innerHTML += `<li>${repo.name}</li>`;
    }
    output.innerHTML += '</ul>';
}