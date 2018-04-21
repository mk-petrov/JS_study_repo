function generateBook(selector, title, author, isbn) {
    // there is no Static in js, so IIFE is needed to assign a variable like static
    let bookGenerator = (function () {
        let id  = 1;
        return function (selector, title, author, isbn) {
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

            //second Btn solution
            // let selectBtn = $('<button>[Select]</button>');
            // selectBtn.on('click', () => divBook.css('border', '2px solid blue'));
            // selectBtn.appendTo(divBook);


            divBook.appendTo(htmlSelector);
            id++;
        }
    })();
    bookGenerator(selector, title, author, isbn);
}

