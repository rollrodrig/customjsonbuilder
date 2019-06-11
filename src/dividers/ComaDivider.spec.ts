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

    it('fixing bug', () => {
        let r1 = [];
        r1 = comaDivider("a:string,b:string");
        expect(r1).to.deep.equal(["a:string","b:string"])
        r1 = comaDivider("a:string,b:string,c:string");
        expect(r1).to.deep.equal(["a:string","b:string","c:string"])
        r1 = comaDivider("a:{m:{x:string},n:strin},b:string");
        expect(r1).to.deep.equal(["a:{m:{x:string},n:strin}","b:string"])
        r1 = comaDivider("a:{n:strin,m:{x:string}},b:string");
        expect(r1).to.deep.equal(["a:{n:strin,m:{x:string}}","b:string"])
        r1 = comaDivider("b:{x:{n:string},y:{m:string}},a:string");
        expect(r1).to.deep.equal(["b:{x:{n:string},y:{m:string}}","a:string"])
        r1 = comaDivider("b:{x:{n:string},y:{m:string,h:{t:string,r:string}}},a:string");
        expect(r1).to.deep.equal(["b:{x:{n:string},y:{m:string,h:{t:string,r:string}}}","a:string"])
        r1 = comaDivider("b:{x:{n:string}},y:{m:string},a:string");
        expect(r1).to.deep.equal(["b:{x:{n:string}}","y:{m:string}","a:string"])
        r1 = comaDivider("b:{x:{n:string},y:{m:string,h:{t:string,r:string}}},a:string");
        expect(r1).to.deep.equal(["b:{x:{n:string},y:{m:string,h:{t:string,r:string}}}","a:string"])
        r1 = comaDivider("y:string,b:{x:{n:string},y:string},a:{s:{d:string}}");
        expect(r1).to.deep.equal(["y:string","b:{x:{n:string},y:string}","a:{s:{d:string}}"])
        r1 = comaDivider("b:string,c:{m:string,n:string},d:string");
        expect(r1).to.deep.equal(["b:string","c:{m:string,n:string}","d:string"])
        r1 = comaDivider("b:{x:string,y:{y:string,w:num}},c:{m:string,n:string},d:string,f:{h:num,r:str},to:{na:str}");
        expect(r1).to.deep.equal(["b:{x:string,y:{y:string,w:num}}","c:{m:string,n:string}","d:string","f:{h:num,r:str}","to:{na:str}"])
    })
});