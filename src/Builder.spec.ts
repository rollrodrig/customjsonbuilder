import { expect, assert } from 'chai';
import Builder from './builder';
import Error from './error/error';
describe('Builder: ', () => {
	it('.run: should return the json ', () => {
        let builder = new Builder();
        let input = `
            {
                name: name,
                email: email,
            }
        `;
        let response = builder.run(input)
        let expected = {
            name: "roll",
            email: "roll@codemente.com"
        }
        expect(response).to.deep.eq(expected)
    });
	it('.run: error missing braces ', () => {
        let builder = new Builder();
        let input = `
            {
                {name: name,
                email: email,
            }
        `;
        let response = builder.run(input)
        expect(response).to.deep.eq(Error.missingBrances())
    });
});
