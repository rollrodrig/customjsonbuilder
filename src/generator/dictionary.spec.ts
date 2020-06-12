import { expect, assert } from 'chai';
import {
    Dictionary,
} from './dictionary';
import {
    StaticValue,
} from './value';
describe('Dictionary: ', () => {
    it('Should generate empty json {}', () => {
        let i = new Dictionary()
        let generated = i.generate()
        expect(generated).to.deep.equal({})
    });
    it('Should generate one {key:value} pair from constructor', () => {
        let i = new Dictionary("name", new StaticValue("jhon"))
        let generated = i.generate()
        expect(generated).to.deep.equal({ name: "jhon" })
    });
    it('Should generate one {key:value} pair from method add', () => {
        let i = new Dictionary()
        expect(i.generate()).to.deep.equal({})
        i.add(new Dictionary("name", new StaticValue("jhon")))
        expect(i.generate()).to.deep.equal({ name: "jhon" })
    });
	it('Should generate one level json', () => {
        let i = new Dictionary("name", new StaticValue("jhon"))
        i.add(new Dictionary("access", new StaticValue(true)))
        i.add(new Dictionary("code", new StaticValue("e001r")))
        i.add(new Dictionary("time", new StaticValue("06062020")))
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
        let parent = new Dictionary("name", new StaticValue("jhon"))
        parent.add(new Dictionary('password', new StaticValue("123")))
        parent.add(new Dictionary('nickname', new StaticValue("madmax")))
        let child = new Dictionary()
        child.add(new Dictionary("access", new StaticValue(true)))
        child.add(new Dictionary("code", new StaticValue("e001r")))
        child.add(new Dictionary("time", new StaticValue("06-06-2020")))
        parent.add(new Dictionary('login', child))
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
        let parent = new Dictionary()
        parent.add(new Dictionary('name', new StaticValue("jhon")))
        parent.add(new Dictionary('id', new StaticValue("uuid123")))
        let line = new Dictionary()
        let port = new Dictionary()
        let city = new Dictionary()
        let ship = new Dictionary()
        let schudele = new Dictionary()
        schudele.add(new Dictionary('title', new StaticValue("atlanta")))
        schudele.add(new Dictionary('time', new StaticValue("24h")))
        ship.add(new Dictionary('ship', schudele));
        port.add(new Dictionary('port', ship));
        city.add(new Dictionary('city', port));
        line.add(new Dictionary('line', city));
        parent.add(new Dictionary('address', line))
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
        let parent = new Dictionary()
        parent.add(new Dictionary('address', 
            new Dictionary('city',
                new Dictionary('city',
                    new Dictionary('city', new StaticValue("atlanta"))
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
