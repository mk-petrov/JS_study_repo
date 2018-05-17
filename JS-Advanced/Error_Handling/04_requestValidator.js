function validateRequest(object){
    let validObjProp = ['method', 'uri', 'version', 'message'];

    // check the 4 properties of request obj
    try {

        if(JSON.stringify(validObjProp) !== JSON.stringify(Object.keys(object))){
            throw new RangeError ('Request is invalid');
        } else{
            // iterate over the object properties
            for (let prop in object) {

                if (object.hasOwnProperty(prop)) {
                    try {
                        validateProp(prop, object[prop]);
                    } catch (err) {
                        console.log(`Invalid request header: Invalid ${prop}`);
                        return;
                    }
                }
            }
            console.log(object);
        }

    } catch (err) {

        console.log('Request is invalid');
    }



    // check for the property values
    function validateProp(key, value) {

        switch (key){

            case 'method':
                if(value === 'GET' || value === 'POST' || value === 'DELETE' || value === 'CONNECT'){
                } else {
                    throw new Error ('Invalid method value');
                }
                break;

            case 'uri':
                let patternUri = /^[a-zA-Z0-9\*\.]+$/g;   //matches alphanumeric chars, * and . ;
                if(patternUri.test(value)){
                } else {
                    throw new Error ('Invalid message value');
                }
                break;

            case 'version':
                if(value === 'HTTP/0.9' || value === 'HTTP/1.0' || value === 'HTTP/1.1' || value === 'HTTP/2.0'){
                    //console.log('version is OK!');
                } else {
                    throw new Error ('Invalid version value');
                }
                break;

            case 'message':
                let patternMess = /^.[^\<\>\\&\'\"]*$/g;   //matches any number of non-special characters, except: <, >, \, &, ', ";
                if(patternMess.test(value) || value === ''){
                } else {
                    throw new Error ('Invalid message value');
                }
                break;
        }


    }
}

validateRequest({
    method: 'GET',
    uri: 'svn.public.catalog',
    version: 'HTTP/1.1',
    message: ''
});

validateRequest({
    method: 'POST',
    uri: 'home.bash',
    message: 'rm -rf /*'
});
validateRequest({
    method: 'OPTIONS',
    uri: 'git.master',
    version: 'HTTP/1.1',
    message: '-recursive'
});
validateRequest({
    method: 'POST',
    uri: 'home.bash',
    message: 'rm -rf /*'
});


