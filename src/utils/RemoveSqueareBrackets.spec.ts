import { expect, assert } from 'chai';
import { removeSquareBrackets } from './RemoveSquareBrackets';
describe('removeSquareBrackets: ', () => {
	it('should remove curly braces [] if it exist', () => {
        expect(removeSquareBrackets("[hello]")).equal("hello");
        expect(removeSquareBrackets("[hello")).equal("hello");
        expect(removeSquareBrackets("hello]")).equal("hello");
        expect(removeSquareBrackets("hello")).equal("hello");
        expect(removeSquareBrackets("he[]llo")).equal("he[]llo");
        expect(removeSquareBrackets("he[llo")).equal("he[llo");
        expect(removeSquareBrackets("he[ll]o")).equal("he[ll]o");
        expect(removeSquareBrackets("he[]o")).equal("he[]o");
        expect(removeSquareBrackets("he[ ]o")).equal("he[ ]o");
    });
});