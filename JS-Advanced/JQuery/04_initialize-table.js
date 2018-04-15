function initializeTable() {
    //Attach event listeners to Create
    $('#createLink').click(addCountry);

    //Add default entries -> call create table row & append to table
    createCountry('Bulgaria', 'Sofia');
    createCountry('Germany', 'Berlin');
    createCountry('Russia', 'Moscow');
    fixLinks();


    //Adjust links
    function fixLinks() {
        $('tr a').show();
        $('tr:last-child a:contains(Down)').hide();
        $('tr:eq(2) a:contains(Up)').hide();
    }

    //Read input and call create row
    function addCountry() {
        let inputCountry = $('#newCountryText');
        let inputCapital = $('#newCapitalText');
        let name = inputCountry.val();
        let capital = inputCapital.val();
        inputCountry.val('');
        inputCapital.val('');
        if(name.length === 0 || capital.length ===0) {return}  // stop function execution if there is a blank field
        createCountry(name, capital);
        fixLinks();
    }

    //Create table row
    function createCountry(name, capital) {
        $('<tr>')
            .append($(`<td>${name}</td>`))
            .append($(`<td>${capital}</td>`))
            .append($(`<td>`)
                .append($('<a href="#">[Up]</a>').click(moveUp))
                .append(' ')
                .append($('<a href="#">[Down]</a>').click(moveDown))
                .append(' ')
                .append($('<a href="#">[Delete]</a>').click(deleteRow)))
            .appendTo($('#countriesTable'));
    }

    //Move row up
    function moveUp() {
        let currentRow = $(this).parent().parent();
        currentRow.fadeOut(() => {
            currentRow.insertBefore(currentRow.prev());
            currentRow.fadeIn();
            fixLinks();
        });
    }

    //Move row down
    function moveDown() {
        let currentRow = $(this).parent().parent();
        currentRow.fadeOut(() => {
            currentRow.insertAfter(currentRow.next());
            currentRow.fadeIn();
            fixLinks();
        });
    }

    //Delete row
    function deleteRow() {
        let currentRow = $(this).parent().parent();
        currentRow.fadeOut(() => {
            currentRow.remove();
            fixLinks();
        });
    }
}