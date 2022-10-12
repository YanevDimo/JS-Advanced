const numberOperations = require('./numberOperation');
const {expect} = require('chai');

describe('Test number operation', () => {
    describe(' pow number', () => {
        it('should return correct params', function () {
            expect(numberOperations.powNumber(2)).to.equal(4)
        });
        it('should return correct params', function () {
            expect(numberOperations.powNumber('')).to.equal(0)
        });
        it('should return correct params', function () {
            expect(numberOperations.powNumber(-2)).to.equal(4)
        });
        
    })
    describe('  number checker', () => {
        it('should return number is not a Number', function () {
            expect(() => numberOperations.numberChecker('string')).to.throw('The input is not a number!')
        });
        it('should return number is not a Number', function () {
            expect(() => numberOperations.numberChecker(NaN)).to.throw('The input is not a number!')
        });
        it('should return input lower than 100', function () {
            expect(numberOperations.numberChecker(1)).to.equal('The number is lower than 100!')
        });
        it('should return input lower than 100', function () {
            expect(numberOperations.numberChecker(-1)).to.equal('The number is lower than 100!')
        });
        it('should return input greater than 100', function () {
            expect(numberOperations.numberChecker(120)).to.equal('The number is greater or equal to 100!')
        });
    })
    describe(' sum arrays', () => {
        it('works with valid data', () => {
            expect(numberOperations.sumArrays([1, 2, 3], [1, 2, 3, 4])).to.have.ordered.members([2, 4, 6, 4]);
            expect(numberOperations.sumArrays([1, 2, 3], [1, 2, 3, 4])).to.have.lengthOf(4);
            expect(numberOperations.sumArrays([1.1, 2.2, 3.3], [1.1, 2.2, 3.3, 4.4])).to.have.ordered.members([2.2, 4.4, 6.6, 4.4]);
            expect(numberOperations.sumArrays([1, 3, 3], [-1, -2, -4, 4])).to.have.ordered.members([0, 1, -1, 4]);

            it('works with string elements in the arrays', () => {
                expect(numberOperations.sumArrays(['1', '2', '3'], ['1', '2', '3', '4'])).to.have.ordered.members(['11', '22', '33', '4']);
            })

            it('return empty array with two empty arrays given', () => {
                expect(numberOperations.sumArrays([], [])).to.be.an('array').that.is.empty;
            })

        });
    })
})