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
});