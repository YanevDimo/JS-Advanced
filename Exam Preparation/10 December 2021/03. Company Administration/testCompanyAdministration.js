const companyAdministration = require('./companyAdministration');
const {expect} = require('chai');

describe('Test company Administration', () => {
    describe('test hiring employee', function () {
        it('should return error', function () {
            expect(() => companyAdministration.hiringEmployee())
                .to.throw(`We are not looking for workers for this position.`);
        });
        it('should return success for 3 and more', function () {
            expect(companyAdministration.hiringEmployee('Dave',"Programmer",3))
                .to.equal('Dave was successfully hired for the position Programmer.');
            expect(companyAdministration.hiringEmployee('Dave',"Programmer",3,5))
                .to.equal('Dave was successfully hired for the position Programmer.')
        });
        it('should return not aproved for less than 3', function () {
            expect(companyAdministration.hiringEmployee('Dave','Programmer',2)).to.equal('Dave is not approved for this position.');
            expect(companyAdministration.hiringEmployee('Dave','Programmer',0)).to.equal('Dave is not approved for this position.');
            expect(companyAdministration.hiringEmployee('Dave','Programmer',-1)).to.equal('Dave is not approved for this position.');
            expect(companyAdministration.hiringEmployee('Dave','Programmer',1.7)).to.equal('Dave is not approved for this position.');
        });
        describe('test calculate salary',()=>{
            it('should return error for incorect input', function () {
                expect(()=>companyAdministration.calculateSalary('')).to.throw("Invalid hours");
                expect(()=>companyAdministration.calculateSalary(-1)).to.throw("Invalid hours");
            });
            it('should return correct salary', function () {
                expect(companyAdministration.calculateSalary(200)).to.equal(4000);
            });
        })
        describe('test  fired Employee',()=>{
            it('should return incorrect array', function () {
                expect(()=>companyAdministration.firedEmployee('Dan',2)).to.throw("Invalid input");
                expect(()=>companyAdministration.firedEmployee(["Petar", "Ivan", "George"],-1)).to.throw("Invalid input");
                expect(()=>companyAdministration.firedEmployee(["Petar", "Ivan", "George"],'string')).to.throw("Invalid input");
                expect(()=>companyAdministration.firedEmployee(["Petar", "Ivan", "George"],4)).to.throw("Invalid input");
            });
            it('should return correct output', function () {
                expect(companyAdministration.firedEmployee(["Petar", "Ivan", "George"],0)).to.equal('Ivan, George');
            });

        })
    });
})