$(() => {
    const baseUrl = 'https://baas.kinvey.com/';
    const appKey = 'kid_rJLePRamQ';
    const appSecret = '904c9f39e0ac4f498cc2d4fd2c2c4e5f';

    // Show all links
    $('header').find('a').show();

    // Attach event listeners
    $('#menu').find('a[data-target]').click(navigateTo);   // Attaches to all links except the logout link
    $('#buttonLoginUser').click(login);

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
                    'Autorization': makeAuth(auth)
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

    // USER
    
    function saveSession(data) {
        //console.log(data);
        localStorage.setItem('username', data.username);
        localStorage.setItem('id', data._id);
        localStorage.setItem('authtoken', data._kmd.authtoken);
    }

     function login() {
        let form = $('#formLogin');
        let username = form.find('input[name="username"]').val();
        let password = form.find('input[name="passwd"]').val();

        //console.log(username + password);
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
            success: (data) => { showView('ads'); saveSession(data)},
            error: () => console.log('Error')
        };
         console.log(req);
         $.ajax(req);

        //let data = await requester.post('user', 'login', {username, password}, 'basic');
        //saveSession(data);
        //showView('ads');
    }

    //"{"username":"ivan","password":"i1"}"
    //{url: "https://baas.kinvey.com/user/kid_rJLePRamQ/login", method: "POST", headers: {…}, data: "{"username":"ivan","password":"i1"}"}
    //{url: "https://baas.kinvey.com/user/kid_rJLePRamQ/login", method: "POST", headers: {…}, data: "{"username":"ivan","password":"i1"}", success: ƒ, …}

});