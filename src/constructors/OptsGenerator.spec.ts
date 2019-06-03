import { assert, expect } from 'chai';
import { OptsGenerator } from './OptsGenerator';
let defaultOpts = {
    type:null, 
    min:10, 
    max:20,
    default:[]
}
describe('OptsGenerator: ', () => {
    beforeEach(()=>{
        defaultOpts = {
            type:null, 
            min:10, 
            max:20,
            default:[]
        }
    })
    it('should return type=string', () => {
        expect(OptsGenerator("string")).to.deep.equal({type:"string"});
        expect(OptsGenerator("phone")).to.deep.equal({type:"phone"});
        expect(OptsGenerator("number")).to.deep.equal({type:"number"});
    });

    // it('should return type=string', () => {
    //     defaultOpts.type = "string";
    //     let opts = OptsGenerator("string");
    //     expect(opts).to.deep.equal(defaultOpts);
    // });
    // it('should return type=number', () => {
    //     defaultOpts.type = "number";
    //     expect(OptsGenerator("number")).to.deep.equal(defaultOpts);
    // });
    // it('should return type=boolean', () => {
    //     defaultOpts.type = "boolean";
    //     expect(OptsGenerator("boolean")).to.deep.equal(defaultOpts);
    // });
    // it('should return type=something', () => {
    //     defaultOpts.type = "something";
    //     expect(OptsGenerator("something")).to.deep.equal(defaultOpts);
    // });
    // it('should return object type and min', () => {
    //     defaultOpts.type = "string";
    //     defaultOpts.min = 8;
    //     expect(OptsGenerator("string|min=8")).to.deep.equal(defaultOpts);
    // });
    // it('should return object type and max', () => {
    //     defaultOpts.type = "string";
    //     defaultOpts.max = 20;
    //     expect(OptsGenerator("string|max=20")).to.deep.equal(defaultOpts);
    // });

    // it('should return object type and min', () => {
    //     expect(OptsGenerator("string|min=8")).to.deep.equal({type:"string", min:8, max:20,default:[]});
    //     expect(OptsGenerator("number|max=12")).to.deep.equal({type:"number", min:10, max:12,default:[]});
    //     expect(OptsGenerator("email|min=2|max=7")).to.deep.equal({type:"email", min:2, max:7,default:[]});
    //     // OptsGenerator("string|min=10|max=20|default=[rolly]");
    // });

});