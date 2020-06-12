import { expect, assert } from 'chai';
import {
    StaticValue,
} from './value';
import { IElement } from './element';
describe('Element', () => {
	it('StaticElement: should return passed value', () => {
        let i: IElement;
        i = new StaticValue('samsung');
        assert.equal(i.generate(), 'samsung')
        
        i = new StaticValue(true);
        assert.equal(i.generate(), true)
        
        i = new StaticValue('EE001-R1');
        assert.equal(i.generate(), 'EE001-R1')

        i = new StaticValue(565);
        assert.equal(i.generate(), 565)
        
        i = new StaticValue(null);
        assert.equal(i.generate(), null)

        i = new StaticValue("null");
        assert.equal(i.generate(), "null")

        i = new StaticValue("");
        assert.equal(i.generate(), "")
    });
});
