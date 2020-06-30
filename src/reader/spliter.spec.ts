import { expect, assert } from 'chai';
import { SpliterStrategy, SpliterClient } from './spliter';
describe('Spliter: ', () => {
	it('.run....', () => {
        // let s = "{name:string,age:number,data:{code:string,access:boolean}}";
        let s = "{name:string,age:{year:string,day:{utc:string}},data:{code:string,access:boolean}}";
        let r = new SpliterClient(s);
        r.setSpliter(new SpliterStrategy())
        r.run()
    });
});
