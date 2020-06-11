import { expect, assert } from 'chai';
import Validator from './validator';
describe('Validator: ', () => {
	it('.run: count the numbers of {} and  [] are the same', () => {
        let i = new Validator();
        assert.isTrue(i.run("[{name:string}]"));
        assert.isTrue(i.run("[{name:string}]"));
        assert.isTrue(i.run("[{name:string, phone:{something}}]"));
        assert.isTrue(i.run("{name:string, phone:{something}}"));
        assert.isTrue(i.run("{name}"));
        assert.isTrue(i.run("{}"));
        assert.isTrue(i.run("nothing"));
        assert.isTrue(i.run(""));
        assert.isTrue(i.run(" "));
        assert.isFalse(i.run("[{name:string]"));
        assert.isFalse(i.run("[{name:string, phone:{something}]"));
        assert.isFalse(i.run("{name:{string}, phone:{{something}}"));
        assert.isFalse(i.run("{name}}"));
    });
});
