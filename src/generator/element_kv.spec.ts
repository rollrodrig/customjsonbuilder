import { expect, assert } from 'chai';
import {
    KeyValueElement,
} from './element';
import {
    StaticElement,
    StringElement,
    NameElement,
    EmailElement
} from './final_element';

describe('KeyValueElement', () => {
	it('generate: should return key: string', () => {
        let i: KeyValueElement<string>;
        i = new KeyValueElement('text', new StringElement());
        expect(i.generate()).to.deep.equal({text: 'RgerGERrrJR'});
        i = new KeyValueElement('name', new NameElement());
        expect(i.generate()).to.deep.equal({name: 'rolly'});
   
        i = new KeyValueElement('email', new EmailElement());
        expect(i.generate()).to.deep.equal({email: 'rolly@codemente.com'});
   
        i = new KeyValueElement('code', new StaticElement('EE01-44'));
        expect(i.generate()).to.deep.equal({code: 'EE01-44'});

        i = new KeyValueElement('access', new StaticElement('true'));
        expect(i.generate()).to.deep.equal({access: 'true'});
     });
     it('generate: should return key: boolean', () => {
        let i: KeyValueElement<boolean>;
        i = new KeyValueElement('access', new StaticElement(true));
        expect(i.generate()).to.deep.equal({access: true});
     });
});
