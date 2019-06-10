import { expect, assert } from 'chai';
import Builder from './Builder';
import faker from 'faker';

describe('Builder: ', () => {
	it('.getResponse: should return the json ', () => {
        let builder = new Builder();
        builder.setPattern("{name:string}");
        let response = builder.getResponse();
        expect(response).to.deep.eq({name:response.name})
    });
    it('.validatePattern: should not throw error ', () => {
        let b1 = new Builder("{name:string,data:{a:string,b:number}}");
        expect(()=>{b1.validatePattern()}).to.not.throw(SyntaxError);

        let b2 = new Builder("{name:string,data:[{a:string,b:number};10],age:number}");
        expect(()=>{b2.validatePattern()}).to.not.throw(SyntaxError);
    });
    it('.validatePattern: pattern is wrong should throw error ', () => {
        let b1 = new Builder("{name:string");
        expect(()=>{b1.validatePattern()}).to.throw(SyntaxError);

        let b2 = new Builder("{name:string,name:{a:string,age:number}");
        expect(()=>{b2.validatePattern()}).to.throw(SyntaxError);

        let b3 = new Builder("{name:string,name:[{a:string};10,age:number}");
        expect(()=>{b3.validatePattern()}).to.throw(SyntaxError);
    });

    it('static .generateJson: should response with error', () => {
        expect(()=>{ Builder.generateJson("{name:string") }).to.throw(SyntaxError);
        expect(()=>{ Builder.generateJson("{name:string,name:{a:string,age:number}") }).to.throw(SyntaxError);
        expect(()=>{ Builder.generateJson("{name:string,name:[{a:string};10,age:number}") }).to.throw(SyntaxError);
    });

    it('static .generateJson: should generate json object', () => {
        let r1 = Builder.generateJson("{name:string}");
        expect(r1)
            .to.deep.eq({name:r1.name})
        let r2 = Builder.generateJson("{name:string, email:email}");
        expect(r2)
            .to.deep.eq({name:r2.name,email:r2.email})
        let r3 = Builder.generateJson("{name:string, email:[{main:email};3]}");
        assert.isArray(r3.email);
        expect(r3.email.length).eq(3)
    });

    it('.super nested array ', () => {
        // const from ="{district:number,districtName:string,avenue:string,days:string,time:string}";
        // const to = "{district:number,districtName:string,avenue:string}";
        // const author = "{id:uuid,name:name,img:string}";
        // // const merge = `{id:uuid,author:${author},from:${from},to:${to}}`;
        // const merge = `{id:uuid,author:${author},to:${to}}`;
        // const query = `{data:{postDetail:{success:true,message:empty,data:${merge}}}}`;
        // let generated = Builder.generateJson(query);
        // console.log(generated);
        // // expect(generated).to.deep.eq([])
    })    
    it('.supernested object ', () => {
        let supernested = "{bottom:string}";
        for(var i = 0; i < 6; i++) {
            supernested = `{nested_${i}:${supernested}}`;
        }
        // let generated = Builder.generateJson(supernested);
        // console.log(generated);
    })
    it('.supernested with two nested object', () => {
        let n0 = "{n0_a:string}";
        let n1=`{data1:${n0}}`;
        let n2 = `{data2:${n1}}`;
        let n3 = `{data2:${n2}}`;
        let n4 = `{parent:{b:{xx:string},a:string}}`;
        let generatedbug = Builder.generateJson(n4);
        // console.log(generatedbug);
    })
});