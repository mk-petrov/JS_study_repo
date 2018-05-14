function highlight(selector) {
    let deepestPath = 0;
    let deepestElement;

    //get any element that doesn't have any child element in the selector
    let allLeafElements = $(`${selector} *:not(:has(*))`);

    //SEARCH THE DOM FOR THE DEEP NESTED ELEMENT
    allLeafElements.each(function (index, element) {
        let currentDeepestLevel = 0;
        let originalLeaf = element;
        //will iterate while element == undefined
        while(element){
            currentDeepestLevel++;
            element = $(element).parent()[0];
        }

        if(currentDeepestLevel > deepestPath){
            deepestPath = currentDeepestLevel;
            deepestElement = originalLeaf;
        }
    });

    //[0]returns the html element itself
    let selectedElement = $(selector)[0];

    //ADD CLASS TO EVERY PARENT ELEMENT
    while (deepestElement && deepestElement !== selectedElement){
        $(deepestElement).addClass('highlight');
        deepestElement = $(deepestElement).parent()[0];  // or without [0], but in the while rule (deepestElement.length !== 0)
    }

    //ADD CLASS TO THE SELECTED ELEMENT ITSELF
    $(selector).addClass('highlight');
}