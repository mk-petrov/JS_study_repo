function domSearch(selector, boolean) {
    let isCaseSensitive = boolean;
    let contentHolder = $(selector);
    let addDiv = $('<div class="add-controls">' +
        '<label>Enter text: ' +
        '<input></label>' +
        '<a class="button">Add</a></div>');

    let searchDiv = $('<div class="search-controls">' +
        '<label>Search:' +
        '<input></label></div>');

    let resultDiv = $('<div class="result-controls">' +
        '<ul class="items-list"></ul></div>');

    contentHolder.append(addDiv);
    contentHolder.append(searchDiv);
    contentHolder.append(resultDiv);

    let listItems = $('.items-list');
    let inputToAdd = $('.add-controls input');
    let addBtn = $('.add-controls .button');

    //ADD ITEM ON CLICK EVENT AND THE CORRESPONDING DELETE LINK
    addBtn.on('click', function () {
        let newItem = $(`<li class="list-item">
                        <a class="button">X</a>
                        <strong>${inputToAdd.val()}</strong></li>`);

        listItems.append(newItem);
        inputToAdd.val('');

        let deleteItemBtn = $('.list-item .button');
        deleteItemBtn.on('click', function () {
            $(this).parent().remove();
        });
        //console.log(deleteItemBtn);

    });

    let searchInput = $('.search-controls input');

    searchInput.on('keyup', function () {
        let value = $(this).val();
        $(".items-list li").each(function() {
            //if isCaseSensitive TRUE -> search is 'g', in other way -> 'i' case insensitive
            if ($(this).text().search(new RegExp(value, isCaseSensitive ? 'g' : 'i')) > -1) {
                $(this).css('display', 'block');
            }
            else {
                $(this).css('display', 'none');
            }
        });
    });

}