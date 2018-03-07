function print(n, message){
    let body = document.getElementsByTagName('body')[0];
    for(let i = 0; i < n; i++){
        let para = document.createElement('p');
        para.textContent = `Hello from JS and this is your message: "${message}"`;
        
        body.appendChild(para);
    }

    let someText = document.createElement('p');
    someText.innerHTML = 'Some text';
    body.appendChild(someText);
}

print(5, 'Hello World!');