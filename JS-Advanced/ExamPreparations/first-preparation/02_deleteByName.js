function attachEvents() {
    let resultDiv = $('#result');

    $('#btnDelete').on('click', function () {
        let townToDelete = $('#townName').val();
        let hasDeleted = false;
        //JQuery can select element also by reference, so the quotes aren't needed
        let towns = $('#towns option')
            .filter((index, el) => $(el).text() === townToDelete) //returned el is html, but with $() can use it with jquery
            .each(function (index, el) {
                hasDeleted = true;
                $(el).remove();
            });
        resultDiv.text(hasDeleted ? `${townToDelete} deleted.` : `${townToDelete} not found.`);
        //clear the input field
        $('#townName').val('');
    });



    // function deleteTown() {
    //     for (let i = 0; i < towns.length; i++) {
    //         let current = towns[i].val();
    //         if(current === toDelete){
    //             $('option')[i + 1].remove();
    //         }
    //     }
    // }
}