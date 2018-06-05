function ticketsData(tickets, sortCriteria) {
    let arrayOfTickets = [];
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = Number(price);
            this.status = status;
        }
    }
    for (let ticket of tickets){
        let ticketTokens = ticket.split('|');
        let currTicket = new Ticket(ticketTokens[0], ticketTokens[1], ticketTokens[2]);
        /* or
        let [destination, price, status] = ticket.split('|');
        let currTicket = new Ticket(destination, price, status); */

        arrayOfTickets.push(currTicket);
    }
    arrayOfTickets.sort(sortArrayOfObjects);

    function sortArrayOfObjects(a, b) {
        let sortA = a[sortCriteria];
        let sortB = b[sortCriteria];

        if(sortA < sortB) return -1;
        if(sortA > sortB) return 1;
        return 0;
    }

    return arrayOfTickets;
    /* or just:
    return arrayOfTickets.sort((a, b) => a[sortCriteria] > b[sortCriteria]); */
}

console.log(ticketsData(['Philadelphia|94.20|available',
        'New York City|95.99|available',
        'New York City|95.99|sold',
        'Boston|126.20|departed'],
    'destination'
));

// console.log(ticketsData(
//     ['Philadelphia|94.20|available',
//         'New York City|95.99|available',
//         'New York City|95.99|sold',
//         'Boston|126.20|departed'],
//     'status'
// ));


