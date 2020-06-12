import { expect, assert } from 'chai';
import {
    DictionaryElement,
    ValueElement,
    DicFacade,
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
        let i = new DictionaryElement("name", new ValueElement(new StaticElement("jhon")))
        let generated = i.generate()
        expect(generated).to.deep.equal({ name: "jhon" })
    });
    it('Should generate one {key:value} pair from method add', () => {
        let i = new DictionaryElement()
        expect(i.generate()).to.deep.equal({})
        i.add(new DictionaryElement("name", new ValueElement(new StaticElement("jhon"))))
        expect(i.generate()).to.deep.equal({ name: "jhon" })
    });
	it('Should generate one level json', () => {
        let i = new DictionaryElement("name", new ValueElement(new StaticElement("jhon")))
        i.add(new DictionaryElement("access", new ValueElement(new StaticElement(true))))
        i.add(new DictionaryElement("code", new ValueElement(new StaticElement("e001r"))))
        i.add(new DictionaryElement("time", new ValueElement(new StaticElement("06062020"))))
        let generated = i.generate()
        let expected = {
            name: "jhon",
            access: true,
            code: 'e001r',
            time: '06062020' 
        }
        expect(generated).to.deep.equal(expected)
    });
	it('Should generate using facade', () => {
        let i = new DictionaryElement("name", new ValueElement(new StaticElement("jhon")))
        i.add(new DicFacade("access", new StaticElement(true)))
        i.add(new DicFacade("code", new StaticElement("e001r")))
        i.add(new DicFacade("time", new StaticElement("06062020")))

        let generated = i.generate()
        let expected = {
            name: "jhon",
            access: true,
            code: 'e001r',
            time: '06062020' 
        }
        expect(generated).to.deep.equal(expected)
    });
	it('Should generate json mixing facade class and dict class', () => {
        let i = new DictionaryElement("name", new ValueElement(new StaticElement("jhon")))
        i.add(new DicFacade("access", new StaticElement(true)))
        i.add(new DicFacade("code", new StaticElement("e001r")))
        i.add(new DictionaryElement('password', new ValueElement(new StaticElement("123"))))
        i.add(new DicFacade("time", new StaticElement("06062020")))
        i.add(new DictionaryElement('nickname', new ValueElement(new StaticElement("madmax"))))

        let generated = i.generate()
        let expected = {
            password: "123",
            nickname: "madmax",
            name: "jhon",
            access: true,
            code: 'e001r',
            time: '06062020' 
        }
        expect(generated).to.deep.equal(expected)
    });
	it('Should generate nested two level json', () => {
        let parent = new DictionaryElement("name", new ValueElement(new StaticElement("jhon")))
        parent.add(new DictionaryElement('password', new ValueElement(new StaticElement("123"))))
        parent.add(new DictionaryElement('nickname', new ValueElement(new StaticElement("madmax"))))
        let child = new DictionaryElement()
        child.add(new DictionaryElement("access", new ValueElement(new StaticElement(true))))
        child.add(new DictionaryElement("code", new ValueElement(new StaticElement("e001r"))))
        child.add(new DictionaryElement("time", new ValueElement(new StaticElement("06-06-2020"))))
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
        parent.add(new DictionaryElement('name', new ValueElement(new StaticElement("jhon"))))
        parent.add(new DictionaryElement('id', new ValueElement(new StaticElement("uuid123"))))
        let line = new DictionaryElement()
        let port = new DictionaryElement()
        let city = new DictionaryElement()
        let ship = new DictionaryElement()
        let schudele = new DictionaryElement()
        schudele.add(new DictionaryElement('title', new ValueElement(new StaticElement("atlanta"))))
        schudele.add(new DictionaryElement('time', new ValueElement(new StaticElement("24h"))))
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
                    new DictionaryElement('city', new ValueElement(new StaticElement("atlanta")))
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

        // let parent = new DictionaryElement("name", new ValueElement(new StaticElement("jhon")))
        // parent.add(new DictionaryElement('password', new ValueElement(new StaticElement("123"))))
        // parent.add(new DictionaryElement('nickname', new ValueElement(new StaticElement("madmax"))))
        // let child = new DictionaryElement()
        // child.add(new DictionaryElement("access", new ValueElement(new StaticElement(true))))
        // child.add(new DictionaryElement("code", new ValueElement(new StaticElement("e001r"))))
        // child.add(new DictionaryElement("time", new ValueElement(new StaticElement("06-06-2020"))))
        // parent.add(new DictionaryElement('login', child))
        // let generated = parent.generate();



	// it('Should generate two level json', () => {
    //     let main = new DictionaryElement('main')
    //     main.add(new KeyValueElement('access', new StaticElement(true)))
    //     main.add(new KeyValueElement('code', new StaticElement('e001')))

    //     let user = new DictionaryElement('user')
    //     user.add(new KeyValueElement('password', new StaticElement('123')))
    //     user.add(new KeyValueElement('nickname', new StaticElement('jhon')))

    //     let profile = new DictionaryElement('profile')
    //     profile.add(new KeyValueElement('email', new StaticElement('jhon@codemente.com')))
    //     profile.add(new KeyValueElement('picture', new StaticElement('foto.jpg')))
    //     profile.add(new KeyValueElement('website', new StaticElement('https://codemente.com')))
    //     user.add(profile)

    //     let address = new DictionaryElement('address')
    //     address.add(new KeyValueElement('city', new StaticElement('lima')))
    //     address.add(new KeyValueElement('country', new StaticElement('peru')))
    //     address.add(new KeyValueElement('timezone', new StaticElement('utc-5')))
    //     main.add(user)
    //     main.add(address)

    //     let generated = main.generate();
    //     let expected = {
    //         main: {
    //             user: {
    //                 password: '123',
    //                 nickname: 'jhon',
    //                 profile: {
    //                     email: 'jhon@codemente.com',
    //                     picture: 'foto.jpg',
    //                     website: 'https://codemente.com',
    //                 }
    //             },
    //             address: {
    //                 city: 'lima',
    //                 country: 'peru',
    //                 timezone: 'utc-5'
    //             },
    //             access: true,
    //             code: 'e001',
    //         }
    //     }
    //     expect(generated).to.deep.equal(expected)
    // });
});
