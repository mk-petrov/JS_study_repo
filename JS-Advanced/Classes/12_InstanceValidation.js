class CheckingAccount {
    constructor(clientId, email, firstName, lastName){
        this.products = [];
        this.clientId = clientId;
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get clientId() {
        return this._clientId;
    }

    set clientId(value) {
        let patternId = /^\d{6}$/g;
        try{
            if(patternId.test(Number(value))){
                this._clientId = value;
                //console.log('The object has passed the ID checking');
                return;
            }
            throw new TypeError('Client ID must be a 6-digit number');
        } catch (err){
            console.log(err.message);
        }

    }

    get email() {
        return this._email;
    }

    set email(value) {
        let patternEmail = /^[\w.]+@[\w.]+\w+$/g;
        try{
            if(patternEmail.test(value)){
                this._email = value;
                //console.log('The object has passed the e-mail checking');
                return;
            }

            throw new TypeError('Invalid e-mail');
        } catch (err){
            console.log(err.message);
        }
    }

    get firstName() {
        return this._firstName;
    }

    set firstName(value) {
        let patternName = /^[a-zA-Z]{3,20}$/;
        try{
            //check length
            if(value.length < 3 || value.length > 20){
                throw new TypeError('First name must be between 3 and 20 characters long');
            }

            //check chars
            if(patternName.test(value)){
                this._firstName = value;
                //console.log('The object has passed first name the checking');
            } else {
                throw new TypeError('First name must contain only Latin characters');
            }
        } catch (err){
            console.log(err.message);
        }
    }

    get lastName() {
        return this._lastName;
    }

    set lastName(value) {
        let patternName = /^[a-zA-Z]{3,20}$/;
        try{
            //check length
            if(value.length < 3 || value.length > 20){
                throw new TypeError('Last name must be between 3 and 20 characters long');
            }

            //check chars
            if(patternName.test(value)){
                this._lastName = value;
                //console.log('The object has passed the last name checking');
            } else {
                throw new TypeError('Last name must contain only Latin characters');
            }
        } catch(err) {
            console.log(err.message);
        }
    }
}

let acc = new CheckingAccount('1344', 'ivan@some.com', 'Ivan', 'Petrov');
let acc1 = new CheckingAccount('134545', 'ivan@', 'Ivan', 'Petrov');
let acc2 = new CheckingAccount('134545', 'ivan@some.com', 'I', 'Petrov');
let acc3 = new CheckingAccount('134545', 'ivan@some.com', 'Ivan', 'P3trov');