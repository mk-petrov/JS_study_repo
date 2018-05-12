function getExtensibleObject() {
    let obj = {
        extend: function (template) {
            for (let key in template) {
                //if check is necessary, otherwise will iterate over the template prototype also
                if(template.hasOwnProperty(key)){
                    let element = template[key];
                    if(typeof element === 'function'){
                        obj.__proto__[key] = element;
                    } else {
                        obj[key] = element;
                    }

                }
            }
        }
    };
    return obj;
}

let myObj = getExtensibleObject();
let template = {
    extensionMethod: function () {
        console.log('Hi');
    },
    extensionProperty: 'someString'
};
myObj.extend(template);
console.log(myObj);
console.log(Object.getPrototypeOf(myObj));