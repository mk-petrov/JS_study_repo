const SortedList = require('../02_SortedList');
const expect = require('chai').expect;

describe('Sorted List Unit Tests', () => {
   let myList;
   beforeEach(() => {
      myList = new SortedList();     //new instance of sorted list for each test
   });

   describe('Test initial state', () => {
       it('Add exists', () => {
           //class.prototype not the instance!
          expect(SortedList.prototype.hasOwnProperty('add')).to.equal(true);
       });

       it('Remove exists', () => {
           //class.prototype not the instance!
           expect(SortedList.prototype.hasOwnProperty('remove')).to.equal(true);
       });

       it('Get exists', () => {
           //class.prototype not the instance!
           expect(SortedList.prototype.hasOwnProperty('get')).to.equal(true);
       });

       it('Size exists', () => {
           //class.prototype not the instance!
           expect(SortedList.prototype.hasOwnProperty('size')).to.equal(true);
       });
   });

   describe('Test add', () => {
       it('test with one element', () => {
          myList.add(5);
          expect(myList.list.join(', ')).to.equal('5', 'List did\'t add correctly!')
       });

       it('test with more elements', () => {
           myList.add(5);
           myList.add(4);
           myList.add(3);
           //the list will be sorted!
           expect(myList.list.join(', ')).to.equal('3, 4, 5', 'List did\'t add correctly!')
       });
   });

   describe('Test remove', () => {
      it('With empty list', () => {
          //the message has to be equal to the Error message from tested js file, or without message at all!
          expect(() => myList.remove()).throw(Error, 'Collection is empty.')
      });

       it('With negative index', () => {
           myList.add(6);
           expect(() => myList.remove(-5)).throw(Error, 'Index was outside the bounds of the collection')
       });

       it('With index equal to list length', () => {
           myList.add(6);
           expect(() => myList.remove(1)).throw(Error, 'Index was outside the bounds of the collection')
       });

       it('With index greater than list length', () => {
           myList.add(6);
           expect(() => myList.remove(2)).throw(Error, 'Index was outside the bounds of the collection')
       });

       it('With correct index (should remove)', () => {
           myList.add(6);
           myList.add(4);
           myList.add(5);     // myList will be: 4, 5, 6
           myList.remove(1);   //remove at 1 index
           expect(myList.list.join(', ')).to.equal('4, 6', 'Did\'t remove correctly!')
       });
   });

   describe('Test get', () => {
       it('With empty list', () => {
           expect(() => myList.get()).throw(Error, 'Collection is empty.')
       });

       it('With negative index', () => {
           myList.add(6);
           expect(() => myList.get(-5)).throw(Error, 'Index was outside the bounds of the collection')
       });

       it('With index equal to list length', () => {
           myList.add(6);
           expect(() => myList.get(1)).throw(Error, 'Index was outside the bounds of the collection')
       });

       it('With index greater than list length', () => {
           myList.add(6);
           expect(() => myList.get(2)).throw(Error, 'Index was outside the bounds of the collection')
       });

       it('With correct index (should get element)', () => {
           myList.add(6);
           myList.add(4);
           myList.add(5);     // myList will be: 4, 5, 6
           let el = myList.get(1);   //get at 1 index
           expect(el).to.equal(5, 'Did\'t remove correctly!')
       });
   });

   describe('Test size', () => {
      it('With empty list', () => {
          expect(myList.size).to.equal(0, 'List was not empty!');
      });

       it('With non-empty list', () => {
           myList.add(5);
           myList.add(2);
           myList.add(3);
           expect(myList.size).to.equal(3, 'List size was not correct!');
       });
   });
});
