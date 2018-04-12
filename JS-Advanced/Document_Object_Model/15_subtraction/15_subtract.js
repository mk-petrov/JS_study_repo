function subtract() {
    let firstNum = Number(document.getElementById('firstNumber').value);
    let secondNum = Number(document.getElementById('secondNumber').value);
    let result = document.getElementById('result');
    result.textContent = firstNum - secondNum;
    let inputs = document.getElementsByTagName('input');
    Array.from(inputs).forEach(e => e.removeAttribute('disabled'));
}