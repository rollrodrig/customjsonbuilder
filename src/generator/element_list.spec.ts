import { expect, assert } from 'chai';
import {
    ListElement,
    DictionaryElement,
} from './element';
import {
    StaticElement,
    StringElement,
    NameElement,
    EmailElement
} from './final_element';

// describe('ListElement', () => {
// 	it('Should return array with values', () => {
//         let i = new ListElement('posts')
        
//         let post = new DictionaryElement('post')
//         post.add(new KeyValueElement('title',new StaticElement('post title 1')))
//         post.add(new KeyValueElement('id',new StaticElement(1)))
//         let generated = post.generate()

//         // i.add(new ValueElement(new StaticElement('')))
//         // i.add(new ValueElement(new StaticElement('post title 2')))
//         // i.add(new ValueElement(new StaticElement('post title 3')))
//         // let generated = i.generate()
//         console.log(generated)
//         let expected = {
//             posts:[
//                 {title: "post title 1", id: 1},
//                 {title: "post title 2", id: 2},
//                 {title: "post title 3", id: 3},
//             ]
//         }
//         // expect(generated).to.deep.equal(expected)
//     });
// });
