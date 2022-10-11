let {expect} = require('chai');
let flowerShop = require('./03. Flowers Shop')

describe('Test flover shop', () => {
    describe('test calculate price of flowers', () => {
        it('should return invalid input', function () {
           expect(()=>flowerShop.calcPriceOfFlowers(23,2,2)).to.throw( "Invalid input!");
           expect(()=>flowerShop.calcPriceOfFlowers('roses','2',2)).to.throw( "Invalid input!");
           expect(()=>flowerShop.calcPriceOfFlowers('roses',2,'2')).to.throw( "Invalid input!");
        });
        it('should return valid value', function () {
            expect(flowerShop.calcPriceOfFlowers('roses',2,2))
                .to.equal(`You need $4.00 to buy roses!`)
        });
    });

    describe('test check flower available', () => {
        it('should return sold flowers', function () {
            expect(flowerShop.checkFlowersAvailable( '2', ["Rose", "Lily", "Orchid"]))
                .to.equal( "The 2 are sold! You need to purchase more!")
        });
        it('should return sold flowers', function () {
            expect(flowerShop.checkFlowersAvailable( '1', ["Rose", "Lily", "Orchid"]))
                .to.equal( "The 1 are sold! You need to purchase more!")
        });
        it('should return sold flowers', function () {
            expect(flowerShop.checkFlowersAvailable( '3', ["Rose", "Lily", "Orchid"]))
                .to.equal( "The 3 are sold! You need to purchase more!");
        });
        it('should return sold flowers', function () {
            expect(flowerShop.checkFlowersAvailable( 'Rose', ["Rose", "Lily", "Orchid"]))
                .to.equal( "The Rose are available!");
        });
    })

    describe('test sell flower', () => {
        it('should return invalid input', function () {
            expect(()=>flowerShop.sellFlowers(["Rose", "Lily", "Orchid"],-1)).to.throw("Invalid input!");
            expect(()=>flowerShop.sellFlowers([],1)).to.throw("Invalid input!");
            expect(()=>flowerShop.sellFlowers(["Rose", "Lily", "Orchid"],'1')).to.throw("Invalid input!");
            expect(()=>flowerShop.sellFlowers(["Rose", "Lily", "Orchid"],5)).to.throw("Invalid input!");
        });
        it('should correct parameters', function () {
            expect(flowerShop.sellFlowers(["Rose", "Lily", "Orchid"],1)).to.equal('Rose / Orchid')
        });
    })
})