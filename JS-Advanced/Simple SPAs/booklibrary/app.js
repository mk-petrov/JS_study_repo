$(() => {

    // APP constants
    const baseUrl = 'https://baas.kinvey.com/';
    const appKey = 'kid_B1vXHnE77';
    const appSecret = '572744df7afd49aea600badf124d4ab0';

    // Attach even listeners
    $('#linkHome').click(() => showView('home'));
    $('#linkLogin').click(() => showView('login'));
    $('#linkRegister').click(() => showView('register'));
    $('#linkBooks').click(() => showView('books'));
    $('#linkCreate').click(() => showView('create'));
    $('#linkLogout').click(() => showView('logout'));


    $('#formLogin').submit((e) => {e.preventDefault(); login()});
    $('#formRegister').submit(register);

    // Hide everything and show only the desired one
    function showView(name) {
        $('section').hide();

        switch (name) {
            case 'home': $('#viewHome').show(); break;
            case 'login': $('#viewLogin').show(); break;
            case 'register': $('#viewRegister').show(); break;
            case 'books': $('#viewBooks').show(); break;
            case 'create': $('#viewCreate').show(); break;
            case 'logout': $('#viewLogout').show(); break;
        }
    }

    function request(uri, method, data) {
        let req = {
            url: baseUrl + uri,
            method: method,
            headers: {
                'Authorization': ''
            }
        };

        if (data !== undefined){
            req.data = JSON.stringify(data);
        }

        return $.ajax(req);
    }
    
    function setStorage(data) {
        localStorage.setItem('authtoken', data._kmd.authtoken);
        localStorage.setItem('username', data.username);
        $('#loggedInUser').text(`Welcome, ${data.username}!`);
        showView('books');
    }
    
    function login() {
        let username = $("[name = 'username']").val();
        let password = $("[name = 'passwd']").val();

        let req = {
            url: baseUrl + 'user/' + appKey + '/login',
            method: 'POST',
            headers: {
                'Authorization': 'Basic ' + btoa(appKey + ':' + appSecret),
                'Content-Type': 'application/json'
            },
            data: JSON.stringify({
                username: username,
                password: password
            }),
            success: setStorage,
            error: (reason) => console.log(reason)
        };

        $.ajax(req);
    }

    function register(e) {
        e.preventDefault();
        let username = $("[name = 'usernameR']").val();
        let password = $("[name = 'passwdR']").val();
        let passwordRepeat = $("[name = 'passwdRepeat']").val();

        if(password !== passwordRepeat){
            alert("Passwords don't match!");
            return;
        }

        let req = {
            url: baseUrl + 'user/' + appKey,
            method: 'POST',
            headers: {
                'Authorization': 'Basic ' + btoa(appKey + ':' + appSecret),
                'Content-Type': 'application/json'
            },
            data: JSON.stringify({
                username: username,
                password: password
            }),
            success: setStorage,
            error: (reason) => console.log(reason)
        };

        $.ajax(req);
    }
});