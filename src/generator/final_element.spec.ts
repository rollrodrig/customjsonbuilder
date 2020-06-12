import { expect, assert } from 'chai';
import {
    StaticElement,
    IFinalElement,
} from './final_element';
describe('Element', () => {
	it('StaticElement: should return passed value', () => {
        let i: IFinalElement<string | number | boolean>;
        i = new StaticElement('samsung');
        assert.equal(i.generate(), 'samsung')
        
        i = new StaticElement(true);
        assert.equal(i.generate(), true)
        
        i = new StaticElement('EE001-R1');
        assert.equal(i.generate(), 'EE001-R1')

        i = new StaticElement(565);
        assert.equal(i.generate(), 565)
        
        i = new StaticElement(null);
        assert.equal(i.generate(), null)

        i = new StaticElement("null");
        assert.equal(i.generate(), "null")

        i = new StaticElement("");
        assert.equal(i.generate(), "")
    });
});
