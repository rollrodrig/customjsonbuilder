import { expect, assert } from 'chai';
import Builder from './Builder';
import faker from 'faker';

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
    it('.validatePattern: pattern is wrong should not throw error ', () => {
        let b1 = new Builder("{name:string");
        expect(()=>{b1.validatePattern()}).to.throw(SyntaxError);

        let b2 = new Builder("{name:string,name:{a:string,age:number}");
        expect(()=>{b2.validatePattern()}).to.throw(SyntaxError);

        let b3 = new Builder("{name:string,name:[{a:string};10,age:number}");
        expect(()=>{b3.validatePattern()}).to.throw(SyntaxError);
    });
});