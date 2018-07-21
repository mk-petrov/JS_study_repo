$(() => {

    // Show all links
    $('header').find('a').show();

    // Attach event listeners
    $('#menu').find('a[data-target]').click(navigateTo);   // Attaches to all links except the logout link
    $('#buttonLoginUser').click(login);
    $('#buttonRegisterUser').click(register);
    $('#linkLogout').click(logout);

    // Navigate to specific view section
    function navigateTo(e) {
        $('section').hide();
        let target = $(e.target).attr('data-target');
        $('#' + target).show();
    }

    function showView(view) {
        $('section').hide();

        switch (view){
            case 'home': $('#viewHome').show(); break;
            case 'login': $('#viewLogin').show(); break;
            case 'register': $('#viewRegister').show(); break;
            case 'ads': $('#viewAds').show(); break;
            case 'create': $('#viewCreateAd').show(); break;
        }
    }

    let requester = (() => {
        const baseUrl = 'https://baas.kinvey.com/';
        const appKey = 'kid_rJLePRamQ';
        const appSecret = '904c9f39e0ac4f498cc2d4fd2c2c4e5f';

        function makeAuth(type) {
            if (type === 'basic') return 'Basic ' + btoa(appKey + ':' + appSecret);
            else return 'Kinvey ' + localStorage.getItem('authtoken');
        }

        function makeRequest(method, module, url, auth) {
            return req = {
                url: baseUrl + module + '/' + appKey + '/' + url,
                method,
                headers: {
                    'Authorization': makeAuth(auth)
                }
            };

            //return $.ajax(req); can't be modified when it's done!
        }

        // This functions will return promise
        function get(module, url, auth) {
            return $.ajax(makeRequest('GET', module, url, auth));
        }

        function post(module, url, data, auth) {
            let req = makeRequest('POST', module, url, auth);
            req.data = JSON.stringify(data);
            req.headers['Content-Type'] = 'application/json';
            return $.ajax(req);
        }

        function update(module, url, data, auth) {
            let req = makeRequest('PUT', module, url, auth);
            req.data = JSON.stringify(data);
            return $.ajax(req);
        }

        function remove(module, url, auth) {
            return $.ajax(makeRequest('DELETE', module, url, auth));
        }

        return {
            get, post, update, remove
        }
    })();

    if(localStorage.getItem('authtoken') !== null && localStorage.getItem('username') !== null){
        userLoggedIn();
    } else {
        userLoggedOut();
    }

    function userLoggedIn() {
        let greetSpan = $('#loggedInUser');
        greetSpan.text(`Welcome, ${localStorage.getItem('username')}!`);
        greetSpan.show();
        $('#linkLogin').hide();
        $('#linkRegister').hide();
        $('#linkLogout').show();
        $('#linkListAds').show();
        $('#linkCreateAd').show();
    }

    function userLoggedOut() {
        let greetSpan = $('#loggedInUser');
        greetSpan.text('');
        greetSpan.hide();
        $('#linkLogin').show();
        $('#linkRegister').show();
        $('#linkLogout').hide();
        $('#linkListAds').hide();
        $('#linkCreateAd').hide();
    }

    // Made the Handshake
    //requester.get('appdata', '', 'basic');

    // USER
    
    function saveSession(data) {
        //console.log(data);
        localStorage.setItem('username', data.username);
        localStorage.setItem('id', data._id);
        localStorage.setItem('authtoken', data._kmd.authtoken);
        userLoggedIn();
    }

    async function login() {
        let form = $('#formLogin');
        let username = form.find('input[name="username"]').val();
        let password = form.find('input[name="passwd"]').val();

        try {
            let data = await requester.post('user', 'login', {username, password}, 'basic');
            saveSession(data);
            showView('ads');
        } catch (err) {
            console.log(err.responseText);
        }

    }

    async function register() {
        let form = $('#formRegister');
        let username = form.find('input[name="username"]').val();
        let password = form.find('input[name="passwd"]').val();

        // without 'login', will register the user
        try {
            let data = await requester.post('user', '', {username, password}, 'basic');
            saveSession(data);
            showView('ads');
        } catch (err) {
            console.log(err.responseText);
        }
    }
    
    async function logout() {
        try {
            let data = await requester.post('user', '_logout', {authtoken: localStorage.getItem('authtoken')});
            localStorage.clear();
            userLoggedOut();
            showView('home');
        } catch (err) {
            console.log(err.responseText);
        }
    }


});