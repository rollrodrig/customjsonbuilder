import { assert } from 'chai';
import { isValue } from './IsValue';
describe('isValue: ', () => {
    it('.isValue: return true only if not array or object', () => {
        assert.isFalse(isValue("{name:string}"));
        assert.isFalse(isValue("{ }"));
        assert.isFalse(isValue("{}"));
        assert.isFalse(isValue("{[]}"));
        assert.isFalse(isValue("{[ ]}"));
        assert.isFalse(isValue("{RANDOMCONTENT}"));
        assert.isFalse(isValue("[{name:string}]"));
        assert.isFalse(isValue("[]"));
        assert.isFalse(isValue("[ ]"));
        
        assert.isTrue(isValue("name:string"));
        assert.isTrue(isValue("name"));
        assert.isTrue(isValue("123"));
    });

});