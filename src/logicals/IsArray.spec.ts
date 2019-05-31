import { assert } from 'chai';
import { isArray } from './IsArray';
describe('IsArray: ', () => {
    it('.isArray: it should be an array', () => {
        assert.isTrue(isArray("[{name:string}]"));
        assert.isTrue(isArray("[]"));
        assert.isTrue(isArray("[ ]"));
        assert.isTrue(isArray("[RANDOMCONTENT]]"));
        assert.isTrue(isArray("[RANDOMCONTENT]]]]]"));
        assert.isTrue(isArray("[[[[[RANDOMCONTENT]"));
        assert.isTrue(isArray("[RA NDO  MC ONTENT]"));
        assert.isTrue(isArray("[{er erg erg]]"));
        assert.isTrue(isArray("[[{RANDOMCONTENT}]]"));
        assert.isTrue(isArray("[[{RANDOMCONTENT}]]"));
    });
    it('.isArray: it should not be an array', () => {
        assert.isFalse(isArray("["));
        assert.isFalse(isArray("{}"));
        assert.isFalse(isArray("{[RANDOMCONTENT]}"));
        assert.isFalse(isArray("{[[{RANDOMCONTENT}]]}"));
        assert.isFalse(isArray("{[nothing]}"));
        assert.isFalse(isArray("{["));
        assert.isFalse(isArray("[]}"));
        assert.isFalse(isArray("[}"));
        assert.isFalse(isArray("}}"));
        assert.isFalse(isArray("}]"));
        assert.isFalse(isArray("]]"));
    });
});