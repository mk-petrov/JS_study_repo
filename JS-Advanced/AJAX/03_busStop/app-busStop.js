$(() => {
    const infoDiv = $('#stopName');
    const busList = $('#buses');
    $('#submit').on('click', getInfo);


    function getInfo() {
        let stopId = $('#stopId').val();
        let req = {
            url: `https://judgetests.firebaseio.com/businfo/${stopId}.json`,
            success: displayInfo,
            error: () => {infoDiv.text('Error'); busList.empty();}
        };

        $.ajax(req);


    }

    function displayInfo(data) {
        //console.log(data.buses);
        busList.empty();
        infoDiv.text(data.name);

        for(let bus in data.buses){
            //console.log(bus + '|' + data.buses[bus]);
            let htmlData = $(`<li>Bus ${bus} arrives in ${data.buses[bus]}</li>`);
            busList.append(htmlData);
        }
    }
});
