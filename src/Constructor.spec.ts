import { expect, assert } from 'chai';
import faker from 'faker';
import Constructor from './Constructor';
describe('Constructor: ', () => {
	it('. ', () => {
        let constructor = new Constructor("{name:string}");
        constructor.go();
    });
});