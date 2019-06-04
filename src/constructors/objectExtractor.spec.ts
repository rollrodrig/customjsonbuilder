import { assert, expect } from 'chai';
import { objectExtractor } from './objectExtractor';
describe('OptsGenerator: ', () => {
    it('should return type=string', () => {
        expect(objectExtractor("[{name:string};10]")).to.eq("{name:string}");
        expect(objectExtractor("[{name:string,age:number};10]"))
            .to.eq("{name:string,age:number}");
        expect(objectExtractor("[{person:{name:string,email:email},age:number};10]"))
            .to.eq("{person:{name:string,email:email},age:number}");
        expect(objectExtractor("[{person:{name:string,email:[{main:email,other:string}]},age:number};10]"))
            .to.eq("{person:{name:string,email:[{main:email,other:string}]},age:number}");
    });
});