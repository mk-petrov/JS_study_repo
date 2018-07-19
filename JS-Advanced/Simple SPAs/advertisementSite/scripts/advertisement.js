$(() => {

    // App consts
    const baseUrl = 'https://baas.kinvey.com/';
    const appKey = 'kid_rJLePRamQ';
    const appSecret = '904c9f39e0ac4f498cc2d4fd2c2c4e5f';

    // Show all links
    $('header').find('a').show();

    // Attach event listeners
    $('#menu').find('a[data-target]').click(navigateTo);   // Attaches to all links except the logout link

    // Navigate to specific view section
    function navigateTo(e) {
        $('section').hide();
        let target = $(e.target).attr('data-target');
        $('#' + target).show();
    }

    function makeAuth(type) {
        if (type === 'basic') return 'Basic ' + btoa(appKey + ':' + appSecret);
        else return 'Kinvey ' + localStorage.getItem('authtoken');
    }

    // This function will return promise
    function request(method, module, url, auth) {
        let req = {
            url: baseUrl + module + appKey + '/' + url,
            method,
            headers: {
                'Autorization': makeAuth(auth),
                'Content-Type': 'application/json'
            }
        };

        return $.ajax(req);
    }

    function get(module, url, auth) {
        return request('GET', module, url, auth);
    }

    function post(module, url, auth) {
        return request('POST', module, url, auth);
    }




});