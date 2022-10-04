let { Repository } = require("./solution.js");
let { expect } = require('chai');

describe("Repository", function () {
    let properties = {
        name: "string",
        age: "number",
        birthday: "object"
    };
    let entity = {
        name: "Pesho",
        age: 22,
        birthday: new Date(1998, 0, 7)
    };

    describe("Initialization", function () {
        it("Should add props property om init", function () {

            let repository = new Repository(properties);
            expect(repository).to.have.property('props');
            expect(repository.props).to.equal(properties);
        });

    });
    describe('Get count',function (){
        it('should return number of entities', function () {

            let repository = new Repository({});
            expect(repository.count).is.equal
        });
    })
});
