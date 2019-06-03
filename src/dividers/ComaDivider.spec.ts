import { expect, assert } from 'chai';
import { comaDivider } from './ComaDivider';

describe('ComaDivider: ', () => {
	it('run', () => {
        expect(comaDivider("name:string,email:string"))
            .to.deep.equal(["name:string","email:string"]);
        expect(comaDivider("name:string,nicks:{first:string,last:string}"))
            .to.deep.equal(["name:string","nicks:{first:string,last:string}"]);
        expect(comaDivider("name:string,email:string,nicks:{first:string,last:string}"))
            .to.deep.equal(["name:string","email:string","nicks:{first:string,last:string}"]);
        expect(comaDivider("name:string,nicks:{first:string,last:string},email:string"))
            .to.deep.equal(["name:string","nicks:{first:string,last:string}","email:string"]);
        expect(comaDivider("name:string,nicks:{first:string,last:{year:number,age:23}},email:string"))
            .to.deep.equal(["name:string","nicks:{first:string,last:{year:number,age:23}}","email:string"]);
        expect(comaDivider("name:string,nicks:[{first:string,last:string}]"))
            .to.deep.equal(["name:string","nicks:[{first:string,last:string}]"]);
        expect(comaDivider("name:string,nicks:[{first:string,last:string};10]"))
            .to.deep.equal(["name:string","nicks:[{first:string,last:string};10]"]);
        expect(comaDivider("name:string,nicks:[{first:string,last:[{name:string, age:23};5]};10],other:string"))
            .to.deep.equal(["name:string","nicks:[{first:string,last:[{name:string, age:23};5]};10]","other:string"]);
        expect(comaDivider("name:string,nicks:{first:string,last:[{name:string, age:23};5]},other:string"))
            .to.deep.equal(["name:string","nicks:{first:string,last:[{name:string, age:23};5]}","other:string"]);
    });
});