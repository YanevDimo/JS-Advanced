describe('Test Numbers',()=>{

    describe('sumNumbers',()=>{

        it('works with valid numbers',()=>{
            expect(testNumbers.sumNumbers(3,5)).to.equal('8.00');
        })
        it('works with negative number', ()=>{
            expect(testNumbers.sumNumbers(3,-5)).to.equal('-2.00')
        })
        it('works with floating point', ()=>{
            expect(testNumbers.sumNumbers(1.5555,0.3333)).to.equal('1.89')
        })
        it('returns undefine with string parameters', ()=>{
            expect(testNumbers.sumNumbers('1','2')).to.equal(undefined);
            expect(testNumbers.sumNumbers(1,'2')).to.equal(undefined);
            expect(testNumbers.sumNumbers('1',2)).to.equal(undefined);
        })
        it('returns undefine with one invalid parameter', ()=>{
            expect(testNumbers.sumNumbers(null,null)).to.equal(undefined);
            expect(testNumbers.sumNumbers(1,null)).to.equal(undefined);
            expect(testNumbers.sumNumbers(null,2)).to.equal(undefined);

        })
    });

    describe('numberChecker',()=>{
        it('works with odd value',()=>{
            expect(testNumbers.numberChecker(1)).to.equal('The number is odd!');
        })
        it('works with even value',()=>{
            expect(testNumbers.numberChecker(2)).to.equal('The number is even!');
        })
        it('works with odd value as string',()=>{
            expect(testNumbers.numberChecker('1')).to.equal('The number is odd!');
        })
        it('works with even value as string',()=>{
            expect(testNumbers.numberChecker('2')).to.equal('The number is even!');
        })
        it('works with empty string',()=>{
            expect(testNumbers.numberChecker('')).to.contain('even!');
        })
        it('detects invalid parameter',  ()=> {
            expect(()=>testNumbers.numberChecker('a')).to.throw();
        });

    });

    describe('averageSumArray',()=>{
        it('should works with integer', ()=> {
            expect(testNumbers.averageSumArray([1,2,3])).to.equal(2);
        });
        it('should works with integer', ()=> {
            expect(testNumbers.averageSumArray([1.5,2.5,3.5])).to.equal(2.5);
        });
    });

});