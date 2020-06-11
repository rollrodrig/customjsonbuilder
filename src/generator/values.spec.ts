import { expect, assert } from 'chai';
import {
    DictionaryElement,
    ListElement,
    StringElement,
    StaticElement
} from './element';
describe('DictionaryElement: ', () => {
	it('.run: --', () => {
        let i = new DictionaryElement('login')
        i.add(new StaticElement('access', true))
        i.add(new StaticElement('code', 'EE001-R1'))
        i.add(new StaticElement('time', '06-06-2020'))
        let generated = i.generate()
        let expected = {
            login: { 
                access: true,
                code: 'EE001-R1',
                time: '06-06-2020' 
            } 
        }
        expect(generated).to.deep.equal(expected)
        
    });
});
describe('ListElement: ', () => {
	it('.run: --', () => {
    });
});

describe('Element: ', () => {
	it('StringElement: should return string', () => {
       let i = new StringElement('name');
       expect(i.generate()).to.deep.equal({name: 'RgerGERrrJR'})
    });
	it('StaticElement: should return passet value', () => {
        let i = new StaticElement('phone', 'samsung');
        expect(i.generate()).to.deep.equal({phone: 'samsung'})

        i = new StaticElement('access', true);
        expect(i.generate()).to.deep.equal({access: true})

        i = new StaticElement('code', 'EE001-R1');
        expect(i.generate()).to.deep.equal({code: 'EE001-R1'})

        // i = new ValueElement('code', {});
        // expect(i.generate()).to.deep.equal({code: {}})

        // i = new ValueElement('code', []);
        // expect(i.generate()).to.deep.equal({code: []})
    });
    
});
