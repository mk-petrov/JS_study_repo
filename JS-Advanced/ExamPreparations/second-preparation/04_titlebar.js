//class that generates an HTML title bar for a webpage
class TitleBar {
    constructor(title) {
        this.title = title;
        this.links = [];
    }

    addLink(href, name) {
        let link = $('<a>')
            .addClass('menu-link')
            .attr('href', href)
            .text(name);

        this.links.push(link);
    }

    appendTo(selector) {
        //Creating elements
        let header = $('<header>').addClass('header');
        let headerRow = $('<div>').addClass('header-row');
        let button = $('<a>')
            .addClass('button')
            .html('&#9776;')
            .click(() => $('div.drawer').toggle());

        let htmlSpan = $('<span>')
            .addClass('title')
            .text(this.title);

        let drawer = $('<div>')
            .addClass('drawer');

        let navMenu = $('<nav>').addClass('menu');
        
        //Appending child elements
        this.links.forEach(link => navMenu.append(link));
        headerRow.append(button);
        headerRow.append(htmlSpan);
        drawer.append(navMenu);

        //Appending elements
        header.append(headerRow);
        header.append(drawer);

        //Appending final html
        $(selector).append(header);
    }
}


