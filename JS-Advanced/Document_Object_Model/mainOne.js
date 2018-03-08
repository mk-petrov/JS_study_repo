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
function calculate(){
    let input1 = Number(document.getElementById('num1').value);  
    let input2 = Number(document.getElementById('num2').value);
    document.getElementById('sum').value = input1 + input2;
    

    //second solution
    // let num1 = document.getElementById('num1');
    // let num2 = document.getElementById('num2');
    // let sum = Number(num1.value) + Number(num2.value);
    // let sumBox = document.getElementById('sum');
    // sumBox.value = sum;  
    
}
function showText(){
    document.getElementById('text').style.display = 'inline';    
    document.getElementById('more').style.display = 'none';    
    document.getElementById('back').style.display = 'inline';    
}

print(5, 'Hello World!');