import { expect, assert } from 'chai';
import Builder from './Builder';
describe('Builder: ', () => {
	it('.getResponse: should return the json ', () => {
        let builder = new Builder();
        builder.setPattern("{name:string}");
        let response = builder.getResponse();
        expect(response).to.deep.eq({name:response.name})
    });
    it('.validatePattern: should not throw error ', () => {
        let b1 = new Builder("{name:string,data:{a:string,b:number}}");
        expect(()=>{b1.validatePattern()}).to.not.throw(SyntaxError);

        let b2 = new Builder("{name:string,data:[{a:string,b:number};10],age:number}");
        expect(()=>{b2.validatePattern()}).to.not.throw(SyntaxError);
    });
    it('.validatePattern: pattern is wrong should throw error ', () => {
        let b1 = new Builder("{name:string");
        expect(()=>{b1.validatePattern()}).to.throw(SyntaxError);

        let b2 = new Builder("{name:string,name:{a:string,age:number}");
        expect(()=>{b2.validatePattern()}).to.throw(SyntaxError);

        let b3 = new Builder("{name:string,name:[{a:string};10,age:number}");
        expect(()=>{b3.validatePattern()}).to.throw(SyntaxError);
    });
    it('static .generateJson: should response with error', () => {
        expect(()=>{ Builder.generateJson("{name:string") }).to.throw(SyntaxError);
        expect(()=>{ Builder.generateJson("{name:string,name:{a:string,age:number}") }).to.throw(SyntaxError);
        expect(()=>{ Builder.generateJson("{name:string,name:[{a:string};10,age:number}") }).to.throw(SyntaxError);
    });
    it('static .generateJson: should generate json object', () => {
        let r1 = Builder.generateJson("{name:string}");
        expect(r1)
            .to.deep.eq({name:r1.name})
        let r2 = Builder.generateJson("{name:string, email:email}");
        expect(r2)
            .to.deep.eq({name:r2.name,email:r2.email})
        let r3 = Builder.generateJson("{name:string, email:[{main:email};3]}");
        assert.isArray(r3.email);
        expect(r3.email.length).eq(3)
    });
    it('.supernested object ', () => {
        let supernested = "{bottom:string}";
        for(var i = 0; i < 26; i++) {
            supernested = `{nested_${i}:${supernested}}`;
        }
        let generated = Builder.generateJson(supernested);
        console.log(generated);
    })
});