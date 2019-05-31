import { expect, assert } from 'chai';
import Builder from './Builder';
import faker from 'faker';

describe('Builder: ', () => {
	it('.getJson: should return the json ', () => {
        let builder = new Builder("{name:string}");
        assert.isNotNull(builder.getJson());
    });

    it('nothing: just running code ', () => {
    });
});