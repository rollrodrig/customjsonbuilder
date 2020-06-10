import { assert, expect } from 'chai';
import { arrayTimes } from './ArrayTimes';
describe('arrayTimes: ', () => {
    it('run', () => {
        expect(arrayTimes("[somehitng;10]")).eq(10);
        expect(arrayTimes("[{somehitng};5]")).eq(5);
        expect(arrayTimes("[{name:string};12]")).eq(12);
        expect(arrayTimes("[{name:string};-22]")).eq(22);
        expect(()=>{arrayTimes("[{name:string};]")}).to.throw(TypeError);
        expect(()=>{arrayTimes("[{name:string};NONUMBER]")}).to.throw(TypeError);
        expect(()=>{arrayTimes("[{name:string};a1]")}).to.throw(TypeError);
        expect(()=>{arrayTimes("[{name:string}]")}).to.throw(SyntaxError);
        expect(()=>{arrayTimes("[10;{name:string}]")}).to.throw(TypeError);
        expect(()=>{arrayTimes("[]")}).to.throw(SyntaxError);
    });
});