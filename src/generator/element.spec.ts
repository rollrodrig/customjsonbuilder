import { expect, assert } from 'chai';
import {
    DictionaryElement,
    ListElement,
    KeyValueElement,
    StringElement,
    NameElement,
    EmailElement,
    StaticElement,
    IElement,
    IFinalElement,
} from './element';
describe('DictionaryElement: ', () => {
	it('Should generate one level json', () => {
        let i = new DictionaryElement('login')
        i.add(new KeyValueElement('access', new StaticElement(true)))
        i.add(new KeyValueElement('code', new StaticElement('EE001-R1')))
        i.add(new KeyValueElement('time', new StaticElement('06-06-2020')))
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

	it('Should generate two level json', () => {
        let child = new DictionaryElement('login')
        child.add(new KeyValueElement('access', new StaticElement(true)))
        child.add(new KeyValueElement('code', new StaticElement('EE001-R1')))
        child.add(new KeyValueElement('time', new StaticElement('06-06-2020')))

        let parent = new DictionaryElement('user')
        parent.add(child)
        parent.add(new KeyValueElement('password', new StaticElement('123')))
        parent.add(new KeyValueElement('nickname', new StaticElement('roll')))
        let generated = parent.generate();
        console.log(generated)
        // let expected = {
        //     login: { 
        //         access: true,
        //         code: 'EE001-R1',
        //         time: '06-06-2020' 
        //     } 
        // }
        // expect(generated).to.deep.equal(expected)
    });    
});
describe('ListElement', () => {
	it('.run: --', () => {
    });
});

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
