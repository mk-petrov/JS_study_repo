function timer() {
    $('#start-timer').click(start);
    $('#stop-timer').click(stop);

    let seconds = 0;
    let counter = null;

    function outputTime(value) {
        $('#hours').text(('0' + Math.floor(value / 3600)).slice(-2));
        $('#minutes').text(('0' + Math.floor((value % 3600) / 60)).slice(-2));
        $('#seconds').text(('0' + (((value % 3600) %60))).slice(-2));
    }
    
    function tick() {
        seconds++;
        outputTime(seconds);
    }
    
    function stop() {
        clearInterval(counter);
    }
    
    function start() {
        seconds = 0;
        clearInterval(counter);
        outputTime(seconds);
        counter = setInterval(tick, 1000);
    }
}