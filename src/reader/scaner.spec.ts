import { expect, assert } from 'chai';
import { Scaner, BlockTree, IBlock } from './scaner';
describe('Scaner: ', () => {
	it('.run....', () => {
        let s = "{name:string,age:number,data:{code:string,access:boolean}}";
        let r = new Scaner(s);
        r.run()
    });
});
describe('BlockTree: ', () => {
	it('should insert number at root node', () => {
        let r = new BlockTree();
        r.insert(2);
        let root = r.getRootNode()
        expect(root.data).equal(2)
    });
});
