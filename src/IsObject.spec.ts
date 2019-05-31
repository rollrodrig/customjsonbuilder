import { assert } from 'chai';
import { isObject } from './IsObject';
describe('isObject: ', () => {
    it('.isObject: it should be an object', () => {
        assert.isTrue(isObject("{name:string}"));
        assert.isTrue(isObject("{ }"));
        assert.isTrue(isObject("{}"));
        assert.isTrue(isObject("{[]}"));
        assert.isTrue(isObject("{[ ]}"));
        assert.isTrue(isObject("{RANDOMCONTENT}"));
        assert.isTrue(isObject("{[RA NDO  MC ONTENT]}"));
        assert.isTrue(isObject("{[{er erg erg]]}"));
        assert.isTrue(isObject("{{[[{RANDOMCONTENT}]]}}"));
        assert.isTrue(isObject("{{}[[{RANDOMCONTENT}]]}"));
    });
    it('.isObject: it should not be an object', () => {
        assert.isFalse(isObject("["));
        assert.isFalse(isObject("{"));
        assert.isFalse(isObject("[RANDOMCONTENT]}"));
        assert.isFalse(isObject("{{{[[{RANDOMCONTENT}]]"));
        assert.isFalse(isObject("[{[nothing]}"));
        assert.isFalse(isObject("{["));
        assert.isFalse(isObject("[]}"));
        assert.isFalse(isObject("[}"));
        assert.isFalse(isObject("}}"));
        assert.isFalse(isObject("}]"));
        assert.isFalse(isObject("]]"));
    });

});