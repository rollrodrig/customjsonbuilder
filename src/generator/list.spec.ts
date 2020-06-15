import { expect, assert } from 'chai';
import { List } from './list';
import { Dictionary } from './dictionary';
import { StaticValue } from './value';
describe('List: ', () => {
    it('Should return empty array', () => {
        let i = new List()
        let generated = i.generate()
        expect(generated).to.deep.equal([])
    });
    it('Should return array with static values', () => {
        let i = new List()
        i.add(new StaticValue("john wick"));
        i.add(new StaticValue("06062020"));
        i.add(new StaticValue("jhon"));
        i.add(new StaticValue(3355));
        i.add(new StaticValue(0));
        i.add(new StaticValue(-1));
        i.add(new StaticValue("-1"));
        i.add(new StaticValue(null));
        i.add(new StaticValue(true));
        i.add(new StaticValue(false));
        let generated = i.generate();
        let expected = [
            'john wick',
            '06062020',
            'jhon',
            3355,
            0,
            -1,
            "-1",
            null,
            true,
            false
        ]
        expect(generated).to.deep.equal(expected)
    });
    it('Should return array sub array', () => {
        let kid = new List()
        kid.add(new StaticValue(1));
        kid.add(new StaticValue(2));
        kid.add(new StaticValue(3));

        let parent = new List()
        parent.add(new StaticValue("a"));
        parent.add(new StaticValue("b"));
        parent.add(new StaticValue("c"));
        parent.add(kid);

        let generated = parent.generate();
        expect(generated).to.deep.equal([ 'a', 'b', 'c', [ 1, 2, 3 ] ])
    });
    it('Should generate array from constructor', () => {
        let parent = new List(new StaticValue("john wick"));
        expect(parent.generate()).to.deep.equal([ 'john wick' ]);
    });
    it('Should generate nested arrays from constructor', () => {
        let arr3 = new List();
        arr3.add(new StaticValue(1));
        arr3.add(new StaticValue(2));
        arr3.add(new StaticValue(3));
        let arr2 = new List(arr3);
        arr2.add(new StaticValue("a"));
        arr2.add(new StaticValue("b"));
        arr2.add(new StaticValue("c"));
        let arr1 = new List(arr2);
        arr1.add(new StaticValue(true));
        arr1.add(new StaticValue(false));
        arr1.add(new StaticValue(null));
        let generated = arr1.generate();
        expect(generated).to.deep.equal([ [ [ 1, 2, 3 ], 'a', 'b', 'c' ], true, false, null ]);
    });
    it('Should process List from constructor', () => {
        let kid = new List()
        kid.add(new StaticValue(1));
        kid.add(new StaticValue(2));
        kid.add(new StaticValue(3));
        let parent = new List(kid);
        let generated = parent.generate();
        expect(generated).to.deep.equal([ [ 1, 2, 3 ] ]);
    });
    it('Should process Dictonary', () => {
        let kid = new List()
        kid.add(new StaticValue(1));
        kid.add(new StaticValue(2));
        kid.add(new StaticValue(3));
        let parent = new List(kid);
        let generated = parent.generate();
        expect(generated).to.deep.equal([ [ 1, 2, 3 ] ]);
    });

});
