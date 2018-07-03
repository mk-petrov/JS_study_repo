function solve() {
    const departBtn = $('#depart');
    const arriveBtn = $('#arrive');
    const infoBox = $('.info');
    let currentId = 'depot';
    let nextStop;
    const baseUrl = 'https://judgetests.firebaseio.com/schedule/';


    function depart() {
        makeReq('depart');
    }

    function arrive() {
        //with request
        //makeReq('arrive');


        arriveBtn.prop('disabled', true);
        departBtn.prop('disabled', false);
        infoBox.text('Arriving at ' + nextStop);

    }

    function makeReq(type) {
        let req = {
            url: baseUrl + currentId + '.json',
            success: (data) => updateInfo(data, type),
            error: reportError
        };

        $.ajax(req);
    }

    function updateInfo(data, type) {
        if(!data || (!data.hasOwnProperty('name') || !data.hasOwnProperty('next'))) {reportError(); return;}
        let text;
        if(type === 'depart'){
            arriveBtn.prop('disabled', false);
            departBtn.prop('disabled', true);
            text = 'Next stop ';
        }
//            if(type === 'arrive'){
//                arriveBtn.prop('disabled', true);
//                departBtn.prop('disabled', false);
//                text = 'Arriving at ';
//            }

        currentId = data.next;
        nextStop = data.name;
        infoBox.text(text + nextStop);
    }

    function reportError() {
        infoBox.text('Error');
        departBtn.prop('disabled', true);
        arriveBtn.prop('disabled', true);
    }

    return {
        depart,
        arrive
    };
};