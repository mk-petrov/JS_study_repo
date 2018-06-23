function generateSummary(selector) {
    $(selector).on('click', function () {
       let summaryText = $('#content strong').text();  //will return collection of all strong elements joined

        createSummary(summaryText);
    });
    
    function createSummary(sumText) {
        //Create elements
        let summary = $('<div>');
        summary.attr('id', 'summary');
        let title = $('<h2>').text('Summary');
        let paragraph = $('<p>').text(sumText);

        //Append elements
        summary.append(title);
        summary.append(paragraph);
        let parent = $('#content').parent();
        parent.append(summary);
    }
}