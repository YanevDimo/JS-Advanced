const {expect} = require('chai');
const bookSelection = require('./bookSelection');

describe('Test Book Selection', () => {
    describe(' isGenreSuitable', () => {
        it('should return books not suitable for kids', function () {
            expect(bookSelection.isGenreSuitable('Thriller', 12)).to.equal(`Books with Thriller genre are not suitable for kids at 12 age`);
            expect(bookSelection.isGenreSuitable('Horror', 12)).to.equal(`Books with Horror genre are not suitable for kids at 12 age`);
        });
        it('should return books suitable', function () {
            expect(bookSelection.isGenreSuitable('Horror', 13)).to.equal(`Those books are suitable`);
        });
    })
    describe('isItAffordable', () => {
        it('should return not enough money', function () {
            expect(bookSelection.isItAffordable(2, 1)).to.equal('You don\'t have enough money');
        });
        it('should return correct output', function () {
            expect(bookSelection.isItAffordable(2, 2)).to.equal(`Book bought. You have 0$ left`);
            expect(bookSelection.isItAffordable(2, 3)).to.equal(`Book bought. You have 1$ left`);
        });

    })
    describe('suitableTitles(', () => {
        it('should return error for invalid input', function () {
            expect(() => bookSelection.suitableTitles('The Da Vinci Code', 2)).to.throw(`Invalid input`);
            expect(() => bookSelection.suitableTitles(2, 'Thriller')).to.throw(`Invalid input`);
            expect(() => bookSelection.suitableTitles(-2, 3)).to.throw(`Invalid input`);
        });
        it('should ', function () {
            expect(bookSelection.suitableTitles(
                    [
                        { title: "The Da Vinci Code", genre: "Thriller" },
                        { title: "Inferno", genre: "Mystery" },
                    ], "Thriller")).to.deep.equal(["The Da Vinci Code"]);
        });
    })
})