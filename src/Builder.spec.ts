import { expect, assert } from 'chai';
import Builder from './builder';
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
	// it('.dummu: true is true ', () => {
    //     expect({a: 1}).to.deep.eq({a: 1})
    // });
});
