import { expect, assert } from 'chai';
import {
    DictionaryElement,
} from './element';
import {
    StaticElement,
    StringElement,
    NameElement,
    EmailElement
} from './final_element';
describe('DictionaryElement: ', () => {
    it('Should generate empty json {}', () => {
        let i = new DictionaryElement()
        let generated = i.generate()
        expect(generated).to.deep.equal({})
    });
    it('Should generate one {key:value} pair from constructor', () => {
        let i = new DictionaryElement("name", new StaticElement("jhon"))
        let generated = i.generate()
        expect(generated).to.deep.equal({ name: "jhon" })
    });
    it('Should generate one {key:value} pair from method add', () => {
        let i = new DictionaryElement()
        expect(i.generate()).to.deep.equal({})
        i.add(new DictionaryElement("name", new StaticElement("jhon")))
        expect(i.generate()).to.deep.equal({ name: "jhon" })
    });
	it('Should generate one level json', () => {
        let i = new DictionaryElement("name", new StaticElement("jhon"))
        i.add(new DictionaryElement("access", new StaticElement(true)))
        i.add(new DictionaryElement("code", new StaticElement("e001r")))
        i.add(new DictionaryElement("time", new StaticElement("06062020")))
        let generated = i.generate()
        let expected = {
            name: "jhon",
            access: true,
            code: 'e001r',
            time: '06062020' 
        }
        expect(generated).to.deep.equal(expected)
    });
	it('Should generate nested two level json', () => {
        let parent = new DictionaryElement("name", new StaticElement("jhon"))
        parent.add(new DictionaryElement('password', new StaticElement("123")))
        parent.add(new DictionaryElement('nickname', new StaticElement("madmax")))
        let child = new DictionaryElement()
        child.add(new DictionaryElement("access", new StaticElement(true)))
        child.add(new DictionaryElement("code", new StaticElement("e001r")))
        child.add(new DictionaryElement("time", new StaticElement("06-06-2020")))
        parent.add(new DictionaryElement('login', child))
        let generated = parent.generate();
        let expected = { 
            name: 'jhon',
            password: '123',
            nickname: 'madmax',
            login: { access: true, code: 'e001r', time: '06-06-2020' }  
        }
        expect(generated).to.deep.equal(expected)
    });
	it('Should generate nested many levels', () => {
        let parent = new DictionaryElement()
        parent.add(new DictionaryElement('name', new StaticElement("jhon")))
        parent.add(new DictionaryElement('id', new StaticElement("uuid123")))
        let line = new DictionaryElement()
        let port = new DictionaryElement()
        let city = new DictionaryElement()
        let ship = new DictionaryElement()
        let schudele = new DictionaryElement()
        schudele.add(new DictionaryElement('title', new StaticElement("atlanta")))
        schudele.add(new DictionaryElement('time', new StaticElement("24h")))
        ship.add(new DictionaryElement('ship', schudele));
        port.add(new DictionaryElement('port', ship));
        city.add(new DictionaryElement('city', port));
        line.add(new DictionaryElement('line', city));
        parent.add(new DictionaryElement('address', line))
        let generated = parent.generate();
        let expected = { 
            name: 'jhon',
            id: 'uuid123',
            address: {
                line: {
                    city: {
                        port: {
                            ship: {
                                title: 'atlanta',
                                time: "24h"
                            }
                        }
                    }
                }
            },
        }
        expect(generated).to.deep.equal(expected)
    });
	it('Should generate nested many levels from constructor', () => {
        let parent = new DictionaryElement()
        parent.add(new DictionaryElement('address', 
            new DictionaryElement('city',
                new DictionaryElement('city',
                    new DictionaryElement('city', new StaticElement("atlanta"))
                )
            )
        ))
        let generated = parent.generate();
        let expected = { 
            address: {
                city: {
                    city: {
                        city: 'atlanta',
                    }
                }
            },
        }
        expect(generated).to.deep.equal(expected)
    });
});
