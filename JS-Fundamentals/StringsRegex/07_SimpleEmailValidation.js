function validateEmail(email) {
    let pattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,20}$/i;
    let result = pattern.test(email);
    if (result) {
        console.log("Valid");
    } else {
        console.log("Invalid");
    }
}

validateEmail(['baiivan@mail.sf.net']);
validateEmail(['big small@mail.co.uk']);



