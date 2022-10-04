// import {expect} from "chai";
const {expect} = require('chai')
let mathEnforcer = {

    addFive: function (num) {

        if (typeof (num) !== 'number') {
            return undefined;
        }
        return num + 5;
    },

    subtractTen: function (num) {
        if (typeof (num) !== 'number') {
            return undefined;
        }
        return num - 10;
    },

    sum: function (num1, num2) {
        if (typeof (num1) !== 'number' || typeof (num2) !== 'number') {
            return undefined;
        }
        return num1 + num2;
    }
};
// module.exports = mathEnforcer;

describe('mathEnforcer', () => {
    describe('addFive', function () {
        it('should return undefined for NaN input ', function () {
            expect(mathEnforcer.addFive('5')).to.equal(undefined);
        });
        it('should return correct result for positive integer ', function () {
            expect(mathEnforcer.addFive(10)).to.equal(15);
        });
        it('should return correct result for negative integer ', function () {
            expect(mathEnforcer.addFive(-5)).to.equal(0);
        });
        it('should return correct result for floating point parameter ', function () {
            expect(mathEnforcer.addFive(3.14)).to.be.closeTo(8.14, 0.01);
        });
    })
    describe('subtractTen', function () {
        it('should return undefined  for NaN input', function () {
            expect(mathEnforcer.subtractTen('test')).to.equal(undefined);
        });
        it('should return correct result for positive integer ', function () {
            expect(mathEnforcer.subtractTen(20)).to.equal(10);
        });
        it('should return correct result for negative integer ', function () {
            expect(mathEnforcer.subtractTen(-10)).to.equal(-20);
        });
        it('should return corect result for floating poin number', function () {
            expect(mathEnforcer.subtractTen(15.5)).to.be.closeTo(5.5, 0.01);
        });
    })
    describe('sum', function () {
        it('should return undefined for invalid first param ', function () {
            expect(mathEnforcer.sum('3', 3)).to.equal(undefined);
        });
        it('should  return undefined for invalid second param ', function () {
            expect(mathEnforcer.sum(3, '')).to.equal(undefined);
        });
        it('should return correct result', function () {
            expect(mathEnforcer.sum(10,-5)).to.equal(5);
        });
        it('should return correct result for floating point number', function () {
            expect(mathEnforcer.sum(4.5,5)).to.be.closeTo(9.5,0.01);
        });
    })

})