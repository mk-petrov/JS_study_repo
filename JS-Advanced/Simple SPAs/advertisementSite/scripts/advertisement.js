$(() => {

    // Dom elements
    let loadingBox = $('#loadingBox');
    let infoBox = $('#infoBox');
    let errorBox = $('#errorBox');
    const adsDiv = $('#ads');

    // Show all links
    $('header').find('a').show();

    // Attach event listeners
    $('#linkHome').click(() => showView('home'));
    $('#linkLogin').click(() => showView('login'));
    $('#linkRegister').click(() => showView('register'));
    $('#linkListAds').click(() => showView('ads'));
    $('#linkCreateAd').click(() => showView('create'));

    //$('#menu').find('a[data-target]').click(navigateTo);   // Attaches to all links except the logout link
    $('#buttonLoginUser').click(login);
    $('#buttonRegisterUser').click(register);
    $('#linkLogout').click(logout);
    $('#buttonCreateAd').click(createAd);

    // Notifications
    $('.notification').click((e) => {
        $(e.target).hide();     //.hide()
    });

    $(document).on({
        ajaxStart: () => loadingBox.show(),
        ajaxStop: () => loadingBox.fadeOut()
    });

    function showInfo(message) {
        infoBox.text(message);
        infoBox.show();
        setTimeout(() => infoBox.fadeOut(), 3000);
    }

    function showError(message) {
        errorBox.text(message + ' Click on message to remove the information box.');
        errorBox.show();
    }

    function handleError(reason) {
        showError(reason.responseJSON.description);
    }

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
            case 'ads': $('#viewAds').show(); loadAds(); break;
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

    // Check for user
    if(localStorage.getItem('authtoken') !== null && localStorage.getItem('username') !== null){
        userLoggedIn();
    } else {
        userLoggedOut();
    }
    showView('home');

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
        let username = form.find('input[name="username"]').val().trim();
        let password = form.find('input[name="passwd"]').val().trim();

        try {
            let data = await requester.post('user', 'login', {username, password}, 'basic');
            saveSession(data);
            showView('ads');
        } catch (err) {
            handleError(err);
        }

    }

    async function register() {
        let form = $('#formRegister');
        let username = form.find('input[name="username"]').val().trim();
        let password = form.find('input[name="passwd"]').val().trim();

        // without 'login', will register the user
        try {
            let data = await requester.post('user', '', {username, password}, 'basic');
            saveSession(data);
            showView('ads');
        } catch (err) {
            handleError(err);
        }
    }
    
    async function logout() {
        try {
            let data = await requester.post('user', '_logout', {authtoken: localStorage.getItem('authtoken')});
            localStorage.clear();
            userLoggedOut();
            showView('home');
        } catch (err) {
            handleError(err);
        }
    }

    async function loadAds() {
        let data = await requester.get('appdata', 'ads');
        adsDiv.empty();

        if(data.length === 0){
            adsDiv.append('<p>No ads in database</p>');
            return;
        }

        for (let ad of data){
            let html = $('<div>');
            html.addClass('ad-box');
            html.append(`<div class="ad-title">${ad.title}</div>`);
            html.append(`<div><img src="${ad.imageUrl}"></div>`);
            html.append(`<div>Price: ${ad.price.toFixed(2)} | By ${ad.publisher}</div>`);

            adsDiv.append(html);
        }
    }
    
    async function createAd() {
        // Parse user input
        let form = $('#formCreateAd');
        let title = form.find('input[name="title"]').val();
        let description = form.find('input[name="description"]').val();
        let price = form.find('input[name="price"]').val();
        let imageUrl = form.find('input[name="image"]').val();
        let date = (new Date()).toString('yyyy-MM-dd');
        let publisher = localStorage.getItem('username');

        // Validation of some values
        if(title.length === 0){
            showError('Title cannot be empty');
            return;
        }

        if(price.length === 0){
            showError('Price cannot be empty');
            return;
        }

        // Create a object
        let newAd = {
            title, description, price, imageUrl, date, publisher
        };

        try {
            await requester.post('appdata', 'posts', newAd);
            showView('ads');
        } catch (err){
            handleError(err);
        }

    }


});