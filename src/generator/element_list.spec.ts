import { expect, assert } from 'chai';
import {
    KeyValueElement,
    ListElement,
    DictionaryElement,
} from './element';
import {
    StaticElement,
    StringElement,
    NameElement,
    EmailElement
} from './final_element';

describe('ListElement', () => {
	it('Should return array with values', () => {
        let i = new ListElement('posts')
        
        let post1 = new DictionaryElement('login')
        post1.add(new KeyValueElement('title', new StaticElement('post title 1')))
        post1.add(new KeyValueElement('title', new StaticElement('post title 2')))

        i.add(new KeyValueElement('title', new StaticElement('')))
        i.add(new KeyValueElement('title', new StaticElement('post title 2')))
        i.add(new KeyValueElement('title', new StaticElement('post title 3')))
        let generated = i.generate()
        console.log(generated)
        let expected = {
            posts:[
                {title: "post title 1", id: 1},
                {title: "post title 2", id: 2},
                {title: "post title 3", id: 3},
            ]
        }
        // expect(generated).to.deep.equal(expected)
    });
});
