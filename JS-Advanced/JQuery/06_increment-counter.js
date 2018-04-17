function increment(selector) {
    let container = $(selector);
    //let fragment = document.createDocumentFragment();
    container
        .append($('<textarea>')
            .attr({
                class: 'counter',
                value: '0',
                disabled: true}))
        .append($('<button>Increment</button>')
            .attr({
                class: 'btn',
                id: 'incrementBtn'
            })
            .click(() => {
            $('.counter').val( + $('.counter').val() + 1);
            }))
        .append($('<button>Add</button>')
            .attr({
                class: 'btn',
                id: 'addBtn'
            })
            .click(() => {
            $('.result').append($(`<li>${$('.counter').val()}</li>`))
            }))
        .append($('<ul class="result"></ul>'));

}