let sharedObject = {
    name: null,
    income: null,
    changeName: function (name) {
        if (name.length === 0) {
            return;
        }
        this.name = name;
        let newName = $('#name');
        newName.val(this.name);
    },
    changeIncome: function (income) {
        if (!Number.isInteger(income) || income <= 0) {
            return;
        }
        this.income = income;
        let newIncome = $('#income');
        newIncome.val(this.income);
    },
    updateName: function () {
        let newName = $('#name').val();
        if (newName.length === 0) {
            return;
        }
        this.name = newName;
    },
    updateIncome: function () {
        let newIncome = $('#income').val();
        if (isNaN(newIncome) || !Number.isInteger(Number(newIncome)) || Number(newIncome) <= 0) {
            return;
        }
        this.income = Number(newIncome);
    }
};

//const sharedObject = require('../08_sharedObject').sharedObject;
const expect = require('chai').expect;
//the two are not necessary because are required already in the 08_sharedObject.js
let jsdom = require('jsdom-global')();  //with () we made an empty document
let $ = require('jquery');


document.body.innerHTML = `<body>
<div id="wrapper">
    <input type="text" id="name">
    <input type="text" id="income">
</div>
</body>`;


describe("Shared Object Unit Tests", function() {

   describe("Initial value tests", function() {

       it("test name initial value", function() {
           expect(sharedObject.name).to.be.null;
       });

       it("test income initial value", function() {
           expect(sharedObject.income).to.be.null;
       });
   });

    describe("changeName tests", function() {

        it("with empty string (name should be null)", function() {
            sharedObject.changeName('');
            expect(sharedObject.name).to.be.null;
        });

        it("with non-empty string (name should not be null)", function() {
            sharedObject.changeName("Pesho");
            expect(sharedObject.name).to.equal("Pesho", 'Name did not change correctly');
        });

        describe("Name input tests", function() {
            it("with empty string (name should be null)", function() {
                sharedObject.changeName('John');
                sharedObject.changeName('');
                let nameTxtVal = $('#name');
                expect(nameTxtVal.val()).to.equal('John');
            });

            it("with non-empty string (name should not be null)", function() {
                sharedObject.changeName('Pesho');
                let nameTxtVal = $('#name');
                expect(nameTxtVal.val()).to.be.equal("Pesho", 'Name did not change correctly');
            });
        });
    });

    describe("changeIncome tests", () => {

        it("with a string (should be null)", () => {
            sharedObject.changeIncome('d');
            expect(sharedObject.income).to.be.null;
        });

        it("with a positive number should be correct)", () => {
            sharedObject.changeIncome(9);
            expect(sharedObject.income).to.be.equal(9);
        });

        it("with float", () => {
            sharedObject.changeIncome(5);
            sharedObject.changeIncome(3.14);
            expect(sharedObject.income).to.equal(5, 'Income did not changed correctly');
        });

        it("with negative", () => {
            sharedObject.changeIncome(6);
            sharedObject.changeIncome(-3);
            expect(sharedObject.income).to.equal(6, 'Income did not changed correctly');
        });

        it("with zero", () => {
            sharedObject.changeIncome(7);
            sharedObject.changeIncome(0);
            expect(sharedObject.income).to.equal(7, 'Income did not changed correctly');
        });

        describe("Income input tests", function () {

            it("with a string (should not change correctly)", () => {
                sharedObject.changeIncome(15);
                sharedObject.changeIncome('d');
                let incomeTxt = $('#income');
                expect(incomeTxt.val()).to.be.equal('15', 'Income input did not changed correctly');
            });

            it("with a positive number (should change correctly)", () => {
                sharedObject.changeIncome(15);
                let incomeTxt = $('#income');
                expect(incomeTxt.val()).to.be.equal('15', 'Income input did not changed correctly');
            });

            it("with a floating-point number", () => {
                sharedObject.changeIncome(15);
                sharedObject.changeIncome(2.11);
                let incomeTxt = $('#income');
                expect(incomeTxt.val()).to.be.equal('15', 'Income input did not changed correctly');
            });

            it("with a negative number", () => {
                sharedObject.changeIncome(15);
                sharedObject.changeIncome(-5);
                let incomeTxt = $('#income');
                expect(incomeTxt.val()).to.be.equal('15', 'Income input did not changed correctly');
            });

            it("with a zero", () => {
                sharedObject.changeIncome(15);
                sharedObject.changeIncome(0);
                let incomeTxt = $('#income');
                expect(incomeTxt.val()).to.be.equal('15', 'Income input did not changed correctly');
            });
        });
    });

    describe("updateName test", () => {

        it("Should not change property with an empty string", () => {
            sharedObject.changeName('Viktor');
            let nameElement = $('#name');
            nameElement.val('');
            sharedObject.updateName();
            expect(sharedObject.name).to.equal('Viktor', 'Name did not update correctly!');
        });

        it("Should change property with a string", () => {
            sharedObject.changeName('Viktor');   //making preexisting value
            let nameElement = $('#name');
            nameElement.val('Petko');
            sharedObject.updateName();
            expect(sharedObject.name).to.equal('Petko', 'Name did not update correctly!');
        });
    });

    describe("updateIncome test", () => {

        it("Should not change income property with an empty string", () => {
           sharedObject.changeIncome(3);    //making preexisting value
           let incomeElement = $('#income');
           incomeElement.val('income');
           sharedObject.updateIncome();
           expect(sharedObject.income).to.equal(3, 'Income did not change!');
        });

        it("Should not change income property with floating-point number", () => {
            sharedObject.changeIncome(3);    //making preexisting value
            let incomeElement = $('#income');
            incomeElement.val('3.14');
            sharedObject.updateIncome();
            expect(sharedObject.income).to.equal(3, 'Income did not change!');
        });

        it("Should not change income property with negative number", () => {
            sharedObject.changeIncome(3);    //making preexisting value
            let incomeElement = $('#income');
            incomeElement.val('-5');
            sharedObject.updateIncome();
            expect(sharedObject.income).to.equal(3, 'Income did not change!');
        });

        it("Should not change income property with zero", () => {
            sharedObject.changeIncome(3);    //making preexisting value
            let incomeElement = $('#income');
            incomeElement.val('0');
            sharedObject.updateIncome();
            expect(sharedObject.income).to.equal(3, 'Income did not change!');
        });

        it("Should change income property with positive", () => {
            sharedObject.changeIncome(3);    //making preexisting value
            let incomeElement = $('#income');
            incomeElement.val('5');
            sharedObject.updateIncome();
            expect(sharedObject.income).to.equal(5, 'Income did not change!');
        });
    });
});