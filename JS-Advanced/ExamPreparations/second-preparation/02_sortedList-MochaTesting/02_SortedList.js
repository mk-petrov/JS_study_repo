class SortedList {
    constructor () {
        this.list = [];
    }

    add (element) {
        this.list.push(element);
        this.sort();
    }

    remove (index) {
        this.vrfyRange(index);
        this.list.splice(index, 1);
    }

    get (index) {
        this.vrfyRange(index);
        return this.list[index];
    }

    vrfyRange (index) {
        if (this.list.length === 0) throw new Error ('Collection is empty.');
        if (index < 0 || index >= this.list.length) throw new Error ('Index was outside the bounds of the collection');
    }

    sort () {
        this.list.sort((a, b) => a - b);
    }

    get size () {
        return this.list.length;
    }
}

module.exports = SortedList;

/*
  Mocha testing:
* - test initial state
* -- add exists
* -- remove exists
* -- get exists
* -- size exists
*
* - test add
* -- add one element
* -- add many elements
*
* - sort will be tested with add
*
* - test remove
* -- test if list is empty (should throw error)
* -- test if index is negative (should throw error)
* -- test if index is equal to list length (should throw error)
* -- test if index is greater than list length (should throw error)
* -- test with correct index (element should be removed)
*
* - test get
* -- test if index is negative (should throw error)
* -- test if index is equal to list length (should throw error)
* -- test if index is greater than list length (should throw error)
* -- test with correct index (should return correct element)
*
* - test size
* -- test with empty list
* -- test with non-empty list
* */