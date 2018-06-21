//Object interacting with the DOM
function tableBuilder(selector) {
    let container = $(selector);

    function createTable(columnNames) {
        container.empty();    //.html("") will also clear the content
        let table = $('<table>');
        //Table row
        let tableRow = $('<tr>');
        for (let column of columnNames) {
            let tableHeader = $('<th>');    //but will not escape if there are html tags$(`<th>${column}</th>`);
            tableHeader.text(column);        //.text in Jquery will escape the html tags
            tableRow.append(tableHeader);
        }
        tableRow.append($('<th>Action</th>'));
        table.append(tableRow);
        container.append(table);
    }
    
    function fillData(dataRows) {
        let table = $(`${selector} table`);  //to select always the table in the given selector
        for (let dataRow of dataRows){
            //Table row
            let tableRow = $('<tr>');
            for (let el of dataRow){
                let tableDefinition = $('<td>');
                tableDefinition.text(el);
                tableRow.append(tableDefinition);
            }

            //create Delete btn
            let delBtn = $('<td><button>Delete</button></td>');
            delBtn.on('click', function () {
                $(this).parent().remove();

                //or event as parameter and
                //$(event.target).parent().parent().remove();
            });
            tableRow.append(delBtn);

            //append the hole row to the table
            table.append(tableRow);
        }
    }

    return {
        createTable,
        fillData
    }
}