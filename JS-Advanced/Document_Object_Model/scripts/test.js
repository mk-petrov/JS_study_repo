function sayHi(){
    alert('Hi from JS!');
}

let counter = 0;

function count(){
    counter ++;
    document.getElementById('counter').textContent = `This button is clicked ${counter} times`;  
    
    if (counter >= 5){
        document.getElementById('reset').disabled = false; 
                   
    }    
}

function clearButton(){
    document.getElementById('counter').textContent = 'This button is clicked 0 times';
    counter = 0;    
}



