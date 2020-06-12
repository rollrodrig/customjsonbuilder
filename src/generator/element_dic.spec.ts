import { expect, assert } from 'chai';
import {
    DictionaryElement,
    KeyValueElement,
} from './element';
import {
    StaticElement,
    StringElement,
    NameElement,
    EmailElement
} from './final_element';

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
        let parent = new DictionaryElement('user')
        parent.add(new KeyValueElement('password', new StaticElement('123')))
        parent.add(new KeyValueElement('nickname', new StaticElement('roll')))
        let child = new DictionaryElement('login')
        child.add(new KeyValueElement('access', new StaticElement(true)))
        child.add(new KeyValueElement('code', new StaticElement('EE001-R1')))
        child.add(new KeyValueElement('time', new StaticElement('06-06-2020')))
        parent.add(child)
        let generated = parent.generate();
        let expected = { 
            user: {
                password: '123',
                nickname: 'roll',
                login: { access: true, code: 'EE001-R1', time: '06-06-2020' } } 
        }
        expect(generated).to.deep.equal(expected)
    });
	it('Should generate two level json', () => {
        let main = new DictionaryElement('main')
        main.add(new KeyValueElement('access', new StaticElement(true)))
        main.add(new KeyValueElement('code', new StaticElement('e001')))

        let user = new DictionaryElement('user')
        user.add(new KeyValueElement('password', new StaticElement('123')))
        user.add(new KeyValueElement('nickname', new StaticElement('roll')))

        let profile = new DictionaryElement('profile')
        profile.add(new KeyValueElement('email', new StaticElement('roll@codemente.com')))
        profile.add(new KeyValueElement('picture', new StaticElement('foto.jpg')))
        profile.add(new KeyValueElement('website', new StaticElement('https://codemente.com')))
        user.add(profile)

        let address = new DictionaryElement('address')
        address.add(new KeyValueElement('city', new StaticElement('lima')))
        address.add(new KeyValueElement('country', new StaticElement('peru')))
        address.add(new KeyValueElement('timezone', new StaticElement('utc-5')))
        main.add(user)
        main.add(address)

        let generated = main.generate();
        let expected = {
            main: {
                user: {
                    password: '123',
                    nickname: 'roll',
                    profile: {
                        email: 'roll@codemente.com',
                        picture: 'foto.jpg',
                        website: 'https://codemente.com',
                    }
                },
                address: {
                    city: 'lima',
                    country: 'peru',
                    timezone: 'utc-5'
                },
                access: true,
                code: 'e001',
            }
        }
        expect(generated).to.deep.equal(expected)
    });
});
