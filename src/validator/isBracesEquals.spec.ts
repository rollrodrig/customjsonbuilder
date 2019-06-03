import { assert } from 'chai';
import { isBracesEquals } from './isBracesEquals';
describe('isBracesEquals: ', () => {
    it('count the numbers of {}, true if the string have the same number', () => {
        assert.isTrue(isBracesEquals("[{name:string}]"));
        assert.isTrue(isBracesEquals("[{name:string, phone:{something}}]"));
        assert.isTrue(isBracesEquals("{name:string, phone:{something}}"));
        assert.isTrue(isBracesEquals("{name}"));
        assert.isTrue(isBracesEquals("{}"));
        assert.isTrue(isBracesEquals("nothing"));
        assert.isTrue(isBracesEquals(""));
        assert.isTrue(isBracesEquals(" "));

        assert.isFalse(isBracesEquals("[{name:string]"));
        assert.isFalse(isBracesEquals("[{name:string, phone:{something}]"));
        assert.isFalse(isBracesEquals("{name:{string}, phone:{{something}}"));
        assert.isFalse(isBracesEquals("{name}}"));
        assert.isFalse(isBracesEquals("{}}}"));
    });
});