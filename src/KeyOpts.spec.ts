import { assert, expect } from 'chai';
import { keyOpts } from './KeyOpts';
describe('KeyOpts: ', () => {
    it('.dev', () => {
        let res = keyOpts("name:string");
        expect(keyOpts("name:string")).to.deep.equal({key:"name", opts:{type:"string"}});
        expect(keyOpts("id:number")).to.deep.equal({key:"id", opts:{type:"number"}});
        expect(keyOpts("greeting:email")).to.deep.equal({key:"greeting", opts:{type:"email"}});
        expect(keyOpts("dummy:firstname")).to.deep.equal({key:"dummy", opts:{type:"firstname"}});
        expect(keyOpts("phone:number")).to.deep.equal({key:"phone", opts:{type:"number"}});
    });
});