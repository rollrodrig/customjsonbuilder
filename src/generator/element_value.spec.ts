import { expect, assert } from 'chai';
import {
    ValueElement,
} from './element';
import {
    StaticElement,
    StringElement,
    NameElement,
    EmailElement
} from './final_element';

describe('ValueElement', () => {
	it('generate: should return same string', () => {
        let i: ValueElement<string>;
        i = new ValueElement(new StringElement());
        expect(i.generate()).to.deep.equal('RgerGERrrJR');
        i = new ValueElement(new NameElement());
        expect(i.generate()).to.deep.equal('rolly');
   
        i = new ValueElement(new EmailElement());
        expect(i.generate()).to.deep.equal('rolly@codemente.com');
   
        i = new ValueElement(new StaticElement('EE01-44'));
        expect(i.generate()).to.deep.equal('EE01-44');

        i = new ValueElement(new StaticElement('true'));
        expect(i.generate()).to.deep.equal('true');
     });
     it('generate: should return same boolean', () => {
        let i: ValueElement<boolean>;
        i = new ValueElement(new StaticElement(true));
        expect(i.generate()).to.deep.equal(true);
     });
});
