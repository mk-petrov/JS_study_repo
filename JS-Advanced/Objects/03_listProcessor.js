let processor = (function () {
    let list = [];

    function add(string) {
        list.push(string);
    }

    function remove(string) {
        list = list.filter(e => e !== string);
    }

    function print() {
        console.log(list.toString());
    }

    return {
        add,
        remove,
        print
    }
})();

processor.add('hello');
processor.add('again');
processor.add('hello');

processor.print();

processor.remove('hello');
processor.print();

