import { assert, expect } from 'chai';
import { kvPair } from './kvPair';
describe('OptsGenerator: ', () => {
    it('should return type=string', () => {
        expect(kvPair("name:string")).to.deep.equal({key:"name",value:"string",nested: false});
    });
});