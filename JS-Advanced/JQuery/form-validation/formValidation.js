function validate() {
    // let usernamePattern = /^[a-zA-Z0-9]{3,20}$/g;
    // let passwordPattern = /^\w{3,15}$/g;
    // let emailPattern = /^[\w.]+@[\w.]+\w+$/g;

    let username = $('#username');
    let email = $('#email');
    let password = $('#password');
    let confirmPassword = $('#confirm-password');
    let companyCheckbox = $('#company');
    let companyNumber = $('#companyNumber');
    let companyInfo = $('#companyInfo');
    let submitBtn = $('#submit');
    let validationDiv = $('#valid');
    let allValid = true;

    //check the radio btn and display company info
    companyCheckbox.on('click', function () {
        if(companyCheckbox.is(':checked')){
            companyInfo.css('display', 'block');
        } else {
            companyInfo.css('display', 'none');
        }
    });

    submitBtn.on('click', function (ev) {
        ev.preventDefault();
        validateForm();

        validationDiv.css('display', allValid
            ? 'block' : 'none');
        allValid = true;
    });
    
    function validateForm() {
        validateWithRegEx(username, /^[a-zA-Z0-9]{3,20}$/g);
        validateWithRegEx(email, /^[\w.]+@[\w.]+\w+$/g);

        if(confirmPassword.val() === password.val()){
            validateWithRegEx(password, /^\w{3,15}$/g);
            validateWithRegEx(confirmPassword, /^\w{3,15}$/g);
        } else {
            confirmPassword.css('border', '2px solid red');
            password.css('border', '2px solid red');
            allValid = false;
        }

        if(companyCheckbox.is(':checked')){
            validateCompanyInfo();
        }
    }

    function validateWithRegEx(input, pattern) {
        if(pattern.test(input.val())){
            input.css('border', 'none');
        } else {
            input.css('border', '2px solid red');
            allValid = false;
        }
    }

    function validateCompanyInfo() {
        let numValue = Number(companyNumber.val());   // +companyNumber.val() will also cast to num
        if(numValue >= 1000 && numValue <= 9999){
            companyNumber.css('border', 'none');
        } else {
            companyNumber.css('border', '2px solid red');
            allValid = false;
        }
    }


}
