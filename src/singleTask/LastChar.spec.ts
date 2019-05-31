import { assert, expect } from 'chai';
import { lastChar } from './LastChar';
describe('LastChar: ', () => {
    it('.lastChar: should return the last character', () => {
        expect(lastChar("THESTRING")).equal("G");
        expect(lastChar("efef,")).equal(",");
        expect(lastChar("e")).equal("e");
        expect(lastChar("1")).equal("1");
        expect(lastChar("0")).equal("0");
        expect(lastChar("_")).equal("_");
        expect(lastChar("{")).equal("{");
        expect(lastChar("abcc}")).equal("}");
        expect(lastChar("vvv}]")).equal("]");
        expect(lastChar("faa{}]")).equal("]");
        expect(lastChar("eaa[")).equal("[");
        expect(()=>{lastChar("content")}).to.not.throw(Error);
    });
    it('.lastChar: should throw error when string is empty or null', () => {
        expect(()=>{lastChar(" ")}).to.throw(Error);
        expect(()=>{lastChar(null)}).to.throw(Error);
    });
});