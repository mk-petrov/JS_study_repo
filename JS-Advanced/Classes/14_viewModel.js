class Textbox {
    constructor(selector, regex){
        this._elements = $(selector);
        this._value = $(this._elements[0]).val();
        this._invalidSymbols = regex;
        this.onInput();
    }

    onInput(){
        //first way
        this.elements.on('input', (event) => {
            let text = $(event.target).val();
            this.value = text;    //because of arrow function, this will be the context of class instance!!!
        });

        /*second way*/
        // let that = this;   //to take the context of the class instance
        // this.elements.on('input', function() {
        //     let text = $(this).val();
        //     that.value = text;
        // });
    }

    get elements(){
        return this._elements;
    }

    get value() {
        return this._value;
    }

    set value(value) {
        this._value = value;

        //to change the value of all elements
        for (let el of this.elements){
            $(el).val(value);
        }
    }

    isValid(){
        return !this._invalidSymbols.test(this.value);
    }
}

let textbox = new Textbox(".textbox",/[^a-zA-Z0-9]/);
let inputs = $('.textbox');

inputs.on('input',function(){console.log(textbox.value);});
