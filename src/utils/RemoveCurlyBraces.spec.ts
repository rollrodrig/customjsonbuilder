import { expect, assert } from 'chai';
import {removeCurlyBraces} from './RemoveCurlyBraces';
describe('removeCurlyBraces: ', () => {
	it('should remove curly braces {} if it exist', () => {
        expect(removeCurlyBraces("{hello}")).equal("hello");
        expect(removeCurlyBraces("{hello")).equal("hello");
        expect(removeCurlyBraces("hello}")).equal("hello");
        expect(removeCurlyBraces("hello")).equal("hello");
        expect(removeCurlyBraces("he{}llo")).equal("he{}llo");
        expect(removeCurlyBraces("he{llo")).equal("he{llo");
        expect(removeCurlyBraces("he{ll}o")).equal("he{ll}o");
        expect(removeCurlyBraces("he{}o")).equal("he{}o");
        expect(removeCurlyBraces("he{ }o")).equal("he{ }o");
    });
});