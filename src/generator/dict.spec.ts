import { expect, assert } from 'chai';
import { Dict } from './dict';
import { List } from './list';
import {
    StaticValue,
} from './value';
describe('Dict: ', () => {
    it('Should generate empty json {}', () => {
        let i = new Dict()
        let generated = i.generate()
        expect(generated).to.deep.equal({})
    });
    it('Should generate one {key:value} pair from constructor', () => {
        let i = new Dict("name", new StaticValue("jhon"))
        let generated = i.generate()
        expect(generated).to.deep.equal({ name: "jhon" })
    });
    it('Should generate one {key:value} pair from method add', () => {
        let i = new Dict()
        expect(i.generate()).to.deep.equal({})
        i.add(new Dict("name", new StaticValue("jhon")))
        expect(i.generate()).to.deep.equal({ name: "jhon" })
    });
	it('Should generate one level json', () => {
        let i = new Dict("name", new StaticValue("jhon"))
        i.add(new Dict("access", new StaticValue(true)))
        i.add(new Dict("code", new StaticValue("e001r")))
        i.add(new Dict("time", new StaticValue("06062020")))
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
        let parent = new Dict("name", new StaticValue("jhon"))
        parent.add(new Dict('password', new StaticValue("123")))
        parent.add(new Dict('nickname', new StaticValue("madmax")))
        let child = new Dict()
        child.add(new Dict("access", new StaticValue(true)))
        child.add(new Dict("code", new StaticValue("e001r")))
        child.add(new Dict("time", new StaticValue("06-06-2020")))
        parent.add(new Dict('login', child))
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
        let parent = new Dict()
        parent.add(new Dict('name', new StaticValue("jhon")))
        parent.add(new Dict('id', new StaticValue("uuid123")))
        let line = new Dict()
        let port = new Dict()
        let city = new Dict()
        let ship = new Dict()
        let schudele = new Dict()
        schudele.add(new Dict('title', new StaticValue("atlanta")))
        schudele.add(new Dict('time', new StaticValue("24h")))
        ship.add(new Dict('ship', schudele));
        port.add(new Dict('port', ship));
        city.add(new Dict('city', port));
        line.add(new Dict('line', city));
        parent.add(new Dict('address', line))
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
        let parent = new Dict()
        parent.add(new Dict('address', 
            new Dict('city',
                new Dict('city',
                    new Dict('city', new StaticValue("atlanta"))
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
	it('Should generate list as value', () => {
        let list1 = new List()
        list1.add(new StaticValue("101"));
        list1.add(new StaticValue("102"));
        list1.add(new StaticValue("103"));
        let list2 = new List()
        list2.add(new StaticValue(true));
        list2.add(new StaticValue(true));
        list2.add(new StaticValue(false));
        let dict = new Dict("name", new StaticValue("jhon"))
        dict.add(new Dict("access", new StaticValue(true)))
        dict.add(new Dict("ids", list1))
        dict.add(new Dict("values", list2))
        let generated = dict.generate();
        let expected = {
            name: 'jhon',
            access: true,
            ids: [ '101', '102', '103' ],
            values: [ true, true, false ]
        }        
        expect(generated).to.deep.equal(expected)
    });
	it('Should generate user with posts', () => {
        let post1 = new Dict("name", new StaticValue("jhon"))
        post1.add(new Dict("code", new StaticValue("0001")))
        let post2 = new Dict()
        post2.add(new Dict("name", new StaticValue("mike")))
        post2.add(new Dict("code", new StaticValue("0002")))
        let post3 = new Dict()
        post3.add(new Dict("name", new StaticValue("alf")))
        post3.add(new Dict("code", new StaticValue("0003")))
        let posts = new List()
        posts.add(post1);
        posts.add(post2);
        posts.add(post3);
        let user = new Dict("name", new StaticValue("jhon"))
        user.add(new Dict("access", new StaticValue(true)))
        user.add(new Dict("posts", posts))
        let generated = user.generate();
        let expected = {
            name: 'jhon',
            access: true,
            posts: [
                { name: 'jhon', code: '0001' },
                { name: 'mike', code: '0002' },
                { name: 'alf', code: '0003' }
            ]
        }     
        expect(generated).to.deep.equal(expected)
    });

});
