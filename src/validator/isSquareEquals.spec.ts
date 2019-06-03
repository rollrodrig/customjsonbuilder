import { assert } from 'chai';
import { isSquareEquals } from './isSquareEquals';
describe('isSquareEquals: ', () => {
    it('count the numbers of [], true if the string have the same number', () => {
        assert.isTrue(isSquareEquals("[{name:string}]"));
        assert.isTrue(isSquareEquals("[{name:string, phone:{something}}]"));
        assert.isTrue(isSquareEquals("{name:string, [phone]:{something}}"));
        assert.isTrue(isSquareEquals("[same]"));
        assert.isTrue(isSquareEquals("[]"));
        assert.isTrue(isSquareEquals("{[]}"));
        assert.isTrue(isSquareEquals("[{}]"));
        assert.isTrue(isSquareEquals("[]]["));
        assert.isTrue(isSquareEquals("nothing"));
        assert.isTrue(isSquareEquals(""));
        assert.isTrue(isSquareEquals(" "));

        assert.isFalse(isSquareEquals("[{name:string"));
        assert.isFalse(isSquareEquals("[{name:[string, phone:{something}]"));
        assert.isFalse(isSquareEquals("{name:{string}], phone:{{something}"));
        assert.isFalse(isSquareEquals("[other]]"));
        assert.isFalse(isSquareEquals("[]]"));
    });
});