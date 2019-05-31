import { assert, expect } from 'chai';
import { keyOpts } from './KeyOpts';
describe('KeyOpts: ', () => {
    it('.dev', () => {
        let res = keyOpts("name:string");
        // expect(keyOpts("name:string")).to.deep.equal({key:"name", opts:{type:"string"}});
        // expect(keyOpts("greeting:string")).to.deep.equal({key:"greeting", opts:{type:"string"}});
        // expect(keyOpts("dummy:string")).to.deep.equal({key:"dummy", opts:{type:"string"}});
    });
});