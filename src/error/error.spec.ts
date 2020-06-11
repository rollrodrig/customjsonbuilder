import { expect, assert } from 'chai';
import Error from './error';
describe('Error: ', () => {
	it('.missingBrances: should print error braquest message', () => {
        let expected = {
            "error": "There is one missing ] or [ or } or {"
        }
        expect(Error.missingBrances()).to.deep.eq(expected);
    });
});
