import { expect, assert } from 'chai';
import faker from 'faker';
import { build } from './build';
describe('buid: ', () => {
    it('.simple query ', () => {
        expect(build("{name:string}"))
            .to.deep.eq([
                {key:"name",value:"string",nested:false,times:-1}
            ])
        expect(build("{name:string, age:number}"))
            .to.deep.eq([
                {key:"name",value:"string",nested:false,times:-1},
                {key:"age",value:"number",nested:false,times:-1},
            ])
        expect(build("{id:number, person: firstname, email:email}"))
            .to.deep.eq([
                {key:"id",value:"number",nested:false,times:-1},
                {key:"person",value:"firstname",nested:false,times:-1},
                {key:"email",value:"email",nested:false,times:-1},
            ]);   
    })
	it('.nested objects ', () => {
        expect(build("{id:number, person:{name:firstname, email:email}, age:number}"))
            .to.deep.eq([
                {key:"id",value:"number",nested:false,times:-1},
                {
                    key:"person",
                    value:"object",
                    times:-1,
                    nested:[
                        {key:"name",value:"firstname",times:-1,nested:false},
                        {key:"email",value:"email",times:-1,nested:false}
                    ]
                },
                {key:"age",value:"number",nested:false,times:-1},
            ]);
        expect(build("{id:number, person:{name:firstname, email:{work:email, home:email}}, age:number}"))
            .to.deep.eq([
                {key:"id",value:"number",nested:false,times:-1},
                {key:"person",value:"object",times:-1,nested:[
                        {key:"name",value:"firstname",times:-1,nested:false},
                        {key:"email",value:"object",times:-1,nested:[
                            {key:"work",value:"email",times:-1,nested:false},
                            {key:"home",value:"email",times:-1,nested:false},
                        ]}
                    ]},
                {key:"age",value:"number",nested:false,times:-1},
            ]);
    });
    it('.nested arrays ', () => {
        expect(build("{authors:[{name:string};2]}"))
            .to.deep.eq([
                {key:"authors",value:"array",nested:"[{name:string};2]",times:2}
            ])
    })
});