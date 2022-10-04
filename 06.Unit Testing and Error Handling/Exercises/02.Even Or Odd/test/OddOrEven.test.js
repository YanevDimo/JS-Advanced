const {expect} = require('chai');
const {isOddOrEven} = require('../02. Even Or Odd');
describe('test is odd or even functionally', () => {
    it('should be undefined if is a number', function () {
        expect(isOddOrEven(2)).to.be.undefined;
    });

    it('should be undefined if is an array', function () {
        expect(isOddOrEven([])).to.be.undefined;
    });
    it('should be undefined if is a object', function () {
        expect(isOddOrEven({})).to.be.undefined;
    })
    it('should return odd if string is odd', function () {
        expect(isOddOrEven('hey')).to.equal('odd')
    })
    it('should return even if string is even', function () {
        expect(isOddOrEven('hand')).to.equal('even')
    })
})







