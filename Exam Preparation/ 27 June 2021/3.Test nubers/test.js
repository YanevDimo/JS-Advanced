const testNumbers = require('./testNumbers');
const {expect} = require('chai');

describe('Test numbers', () => {
    describe('sumNumbers', () => {
        it('should works with valid numbers', function () {
            expect(testNumbers.sumNumbers(3, 5)).to.equal('8.00')
        });
        it('should works with negative numbers', function () {
            expect(testNumbers.sumNumbers(3, -5)).to.equal('-2.00')
        });
        it('should works with floating point ', function () {
            expect(testNumbers.sumNumbers(3.10, 5.10)).to.equal('8.20')
        });
        it('should return undefined with string parameters', function () {
            expect(testNumbers.sumNumbers('1', '2')).to.equal(undefined);
            expect(testNumbers.sumNumbers(1, '2')).to.equal(undefined);
            expect(testNumbers.sumNumbers('1', 2)).to.equal(undefined);
        });
        it('should return undefined with string parameters', function () {
            expect(testNumbers.sumNumbers(null, null)).to.equal(undefined);
            expect(testNumbers.sumNumbers(1, null)).to.equal(undefined);
            expect(testNumbers.sumNumbers(null, 2)).to.equal(undefined);
        });

    })
    describe('numberChecker', () => {
        it('should works with odd value', function () {
            expect(testNumbers.numberChecker(1)).to.contain('odd');
        });
        it('should works with even value', function () {
            expect(testNumbers.numberChecker(2)).to.contain('even');
        });
        it('should works with odd value as string', function () {
            expect(testNumbers.numberChecker('1')).to.contain('odd');
        });
        it('should works with even value as string', function () {
            expect(testNumbers.numberChecker('2')).to.contain('even');
        });
        it('should detect invalid parameter', function () {
            expect(() => testNumbers.numberChecker('a')).to.throw('not a number!')
        });
    })
    describe('averageSumArray', () => {
        it('should with integers', function () {
            expect(testNumbers.averageSumArray([1, 2, 3])).to.equal(2);
        });
        it('should with floats', function () {
            expect(testNumbers.averageSumArray([1.5, 2.5, 3.5])).to.equal(2.5);
        });
    })

})