let id  = 1;
function generateBook(selector, title, author, isbn) {
    let htmlSelector = $(selector);
    let bookTitle = title;
    let bookAuthor = author;
    let bookISBN = isbn;
    let divBook = $(`<div id="book${id}"></div>`);
    divBook.append($(`<p class="title">${bookTitle}</p>`));
    divBook.append($(`<p class="author">${bookAuthor}</p>`));
    divBook.append($(`<p class="isbn">${bookISBN}</p>`));
    divBook.append($('<button>[Select]</button>').click(function () {
        $(this).parent().css('border', '2px solid blue');
    }));
    divBook.append($('<button>[Deselect]</button>').click(function () {
        $(this).parent().css('border', 'none');
    }));
    divBook.appendTo(htmlSelector);

}

