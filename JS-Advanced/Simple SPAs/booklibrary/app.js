$(() => {
    setGreeting();
    // in case we want to login the user every time
    //localStorage.clear();

    // APP constants
    const baseUrl = 'https://baas.kinvey.com/';
    const appKey = 'kid_B1vXHnE77';
    const appSecret = '572744df7afd49aea600badf124d4ab0';

    // DOM elements
    let loadingBox = $('#loadingBox');
    let infoBox = $('#infoBox');
    let errorBox = $('#errorBox');

    // Attach even listeners
    $('#linkHome').click(() => showView('home'));
    $('#linkLogin').click(() => showView('login'));
    $('#linkRegister').click(() => showView('register'));
    $('#linkBooks').click(() => showView('books'));
    $('#linkCreate').click(() => showView('create'));
        // the easy way but the token is active on the server
        //$('#linkLogout').click(() => {localStorage.clear(); showView('home')});
    $('#linkLogout').click(logout);
    infoBox.click((e) => $(e.target).hide());
    errorBox.click((e) => $(e.target).hide());


    $('#formLogin').submit((e) => {e.preventDefault(); login()});
    $('#formRegister').submit(register);

    // ON request start and stop
    $(document).on({
        ajaxStart: () => loadingBox.show(),
        ajaxStop: () => loadingBox.hide()
    });

    function showInfo(message) {
        infoBox.text(message);
        infoBox.show();
        setTimeout(() => infoBox.fadeOut(), 3000);
    }

    //no timer, to give the user time to read the message error
    function showError(message) {
        errorBox.text(message);
        errorBox.show();
    }

    function handleError(reason) {
        showError(reason.responseJSON.description);
    }

    // Navigation and header; Hide everything and show only the desired one
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

    // User session
    function setGreeting() {
        let username = localStorage.getItem('username');
        if(username !== null){
            $('#loggedInUser').text(`Welcome, ${username}!`);
        } else {
            $('#loggedInUser').text('');
        }
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
            success: (data) => { showInfo('Login successful'); setStorage(data)},
            error: handleError
        };

        $.ajax(req);
    }

    function register(e) {
        e.preventDefault();
        let username = $("[name = 'usernameR']").val();
        let password = $("[name = 'passwdR']").val();
        let passwordRepeat = $("[name = 'passwdRepeat']").val();

        if(password !== passwordRepeat){
            showError("Passwords don't match!");
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
            success: (data) => { showInfo('Registration successful'); setStorage(data)},
            error: handleError
        };

        $.ajax(req);
    }
    
    function logout() {
        let req = {
            url: baseUrl + 'user/' + appKey + '/_logout',
            method: 'POST',
            headers: {
                'Authorization': 'Kinvey ' + localStorage.getItem('authtoken'),
            },
            success: logoutSuccess,
            error: handleError
        };

        $.ajax(req);

        function logoutSuccess(data) {
            localStorage.clear();
            setGreeting();
            showView('home');
        }
    }

    // Catalog
});