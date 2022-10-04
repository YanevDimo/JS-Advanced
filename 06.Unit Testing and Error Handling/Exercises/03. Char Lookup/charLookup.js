function lookupChar(string, index) {

    if (typeof (string) !== 'string' || !Number.isInteger(index)) {
        return undefined;
    }

    if (string.length <= index || index < 0) {
        return "Incorrect index";
    }
    return string.charAt(index);
}

// module.exports = lookupChar;

const {expect} = require('chai');

describe('test', () => {
    it('should be first parameter invalid', function () {
        expect(lookupChar(0, 0)).to.equal(undefined);
    });

    it('should be second parameter invalid', function () {
        expect(lookupChar('hey', 'string')).to.equal(undefined);
    });
    it('should be second parameter invalid integer', function () {
        expect(lookupChar('kiss', 0.8)).to.equal(undefined);
    });
    it('should be value bigger than string length', function () {
        expect(lookupChar('hello', 34)).to.equal('Incorrect index')
    });
    it('should be value with negative index ', function () {
        expect(lookupChar('Hi', -8)).to.equal('Incorrect index')
    });
    it('should valid be parameters ', function () {
        expect(lookupChar('hello', 0)).to.equal('h')
    });

})