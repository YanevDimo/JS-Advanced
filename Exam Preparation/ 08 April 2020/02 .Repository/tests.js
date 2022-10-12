let {Repository} = require("./solution.js");
let {expect} = require('chai');

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
        it('should have next id function on init ', function () {
            let repository = new Repository(properties);
            expect(repository).to.have.property('nextId')
            expect(typeof repository.nextId).to.equal('function')

        });

    });
    describe('Add entity', () => {
        it('should return zero if first entity is added', function () {
            let repository = new Repository(properties);
            expect(repository.add(entity)).to.equal(0);
            expect(repository.add(entity)).to.equal(1);
        });
        it('should store valid entity in data map', function () {
            let repository = new Repository(properties);
            repository.add(entity);
            expect(repository.data.get(0)).not.to.be.undefined;
            expect(repository.data.get(0)).to.deep.equal(entity);

        });
        it('should throw error if property is missing', function () {
            let entity = {
                name: "Pesho",
                age: 22,
            }
            let repository = new Repository(properties);
            // expect( () =>repository.add(entity)).to.throw;
            expect(() => repository.add(entity)).to.throw(Error, 'Property birthday is missing from the entity')
        });
        it('should throw error if property has other type', function () {
            let entity = {
                name: "Pesho",
                age: 22,
                birthday: '1998-01-06T22:00:00.000Z'
            }
            let repository = new Repository(properties);
            expect(() => repository.add(entity)).to.throw(Error, 'Property birthday is not of correct type!')
        });
    })
    describe('Get count', function () {
        it('should return number of valid entities', function () {
            let repository = new Repository(properties);
            repository.add(entity);
            repository.add(entity);
            repository.add(entity);
            expect(repository.count).is.equal(3);
        });
        it('should reuturn zero if not added entities', function () {
            let repository = new Repository(properties);
            expect(repository.count).is.equal(0);
        });
    })
    describe('Get id ', () =>{
        it('should return entity by id', function () {
            let repository = new Repository(properties);
            repository.add(entity);
            expect(repository.getId(0)).to.equal(entity);
        });
        it('should throw error when no id is found', function () {
            let repository = new Repository(properties);
            expect(()=> repository.getId(1)).to.throw(Error,'Entity with id: 1 does not exist!')
        });
    })
    describe('Update',()=>{
        it('should update one valid entity with another', function () {
            let newEntity = {
                name: 'George',
                age: 32,
                birthday:new Date(2010,2,7)
            }
            let repository = new Repository(properties)
            repository.add(entity);
            repository.update(0,newEntity);
            expect(repository.getId(0).name).to.equal('George')
        });
        it('should return error when entity does not exist ', function () {
            let newEntity = {
                name: 'George',
                age: 32,
                birthday:new Date(2010,2,7)
            }
            let repository = new Repository(properties)
            expect(()=>repository.update(2,newEntity)).to.throw('Entity with id: 2 does not exist!');
        });
    })

});
