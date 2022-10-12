const cinema = require('./cinema');
const {expect} = require('chai');

describe('test cinema', () => {
    describe('Show Movies', () => {
        it('should return current movie', function () {
            expect(cinema.showMovies([])).to.equal('There are currently no movies to show.');
            expect(cinema.showMovies(['Game of thrones'])).to.equal('Game of thrones');
            expect(cinema.showMovies(['abc', 'def', 'xyz'])).to.equal('abc, def, xyz');
        });
    })
    describe('Ticket Price', () => {
        it('should return correct price', function () {
            expect(cinema.ticketPrice('Premiere')).to.equal(12);
            expect(cinema.ticketPrice('Normal')).to.equal(7.50);
            expect(cinema.ticketPrice('Discount')).to.equal(5.50);
        });
        it('should return invalid projection type', function () {
            expect(() => cinema.ticketPrice('Other')).to.throw('Invalid projection type.');
            expect(() => cinema.ticketPrice(3)).to.throw('Invalid projection type.');
            expect(() => cinema.ticketPrice('')).to.throw('Invalid projection type.');
        });
    })
    describe('Swap Seats In Hall', () => {
        it('should return successfully change of seats', function () {
            expect(cinema.swapSeatsInHall(1, 8)).to.equal('Successful change of seats in the hall.');
        });
        it('should return unsuccessful change of seats ', function () {
            expect(cinema.swapSeatsInHall('string', 2)).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(2, 'string')).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(0, 8)).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(-1, 8)).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(21, 8)).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(1, 0)).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(1, 22)).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(1, -22)).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(1, 1)).to.equal('Unsuccessful change of seats in the hall.');
        });
    })
})