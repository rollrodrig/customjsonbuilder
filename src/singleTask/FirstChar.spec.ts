import { assert, expect } from 'chai';
import { firstChar } from './FirstChar';
describe('FirstChar: ', () => {
    it('.firstChar: should return the first character', () => {
        expect(firstChar("THESTRING")).equal("T");
        expect(firstChar("efefre")).equal("e");
        expect(firstChar("e")).equal("e");
        expect(firstChar("1")).equal("1");
        expect(firstChar("0")).equal("0");
        expect(firstChar("_")).equal("_");
        expect(firstChar("{")).equal("{");
        expect(firstChar("}")).equal("}");
        expect(firstChar("}]")).equal("}");
        expect(firstChar("{}]")).equal("{");
        expect(firstChar("[")).equal("[");
        expect(()=>{firstChar("content")}).to.not.throw(Error);
    });
    it('.firstChar: should throw error when string is empty or null', () => {
        expect(()=>{firstChar(" ")}).to.throw(Error);
        expect(()=>{firstChar(null)}).to.throw(Error);
    });
});