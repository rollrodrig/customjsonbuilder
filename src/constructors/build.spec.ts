import { expect, assert } from 'chai';
import faker from 'faker';
import { build } from './build';
describe('buid: ', () => {
    it('.simple query ', () => {
        expect(build("{name:string}"))
            .to.deep.eq([
                {key:"name",value:"string",nested:false,times:-1}
            ])
        expect(build("{name:string,age:number}"))
            .to.deep.eq([
                {key:"name",value:"string",nested:false,times:-1},
                {key:"age",value:"number",nested:false,times:-1},
            ])
        expect(build("{id:number,person:firstname,email:email}"))
            .to.deep.eq([
                {key:"id",value:"number",nested:false,times:-1},
                {key:"person",value:"firstname",nested:false,times:-1},
                {key:"email",value:"email",nested:false,times:-1},
            ]);   
    })
	it('.nested objects ', () => {
        expect(build("{id:number,person:{name:firstname,email:email},age:number}"))
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
        expect(build("{id:number,person:{name:firstname,email:{work:email,home:email}},age:number}"))
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
                {key:"authors",value:"array",times:2,nested:[
                    {key:"name",value:"string",times:-1,nested:false}
                ]}
            ])
        expect(build("{authors:[{name:string,email:string};2],id:number}"))
            .to.deep.eq([
                {key:"authors",value:"array",times:2,nested:[
                    {key:"name",value:"string",times:-1,nested:false},
                    {key:"email",value:"string",times:-1,nested:false},
                ]},
                {key:"id",value:"number",times:-1,nested:false},
            ]);
        expect(build("{authors:[{name:string,email:string};2],id:number,books:[{title:title,desc:text};8]}"))
            .to.deep.eq([
                {key:"authors",value:"array",times:2,nested:[
                    {key:"name",value:"string",times:-1,nested:false},
                    {key:"email",value:"string",times:-1,nested:false},
                ]},
                {key:"id",value:"number",times:-1,nested:false},
                {key:"books",value:"array",times:8,nested:[
                    {key:"title",value:"title",times:-1,nested:false},
                    {key:"desc",value:"text",times:-1,nested:false},
                ]},
            ]);
    })
    it('two object nested fixing bug', () => {
        // let n4 = `{parent:{b:{xx:string},a:string}}`;
        // let b = [
        //     {key:"parent",value:"object",times:-1,nested:[
        //         {key:"b",value:"object",times:-1,nested:[
        //             {key:"xx",value:"string",times:-1,nested:false},
        //         ]},
        //         {key:"a",value:"string",times:-1,nested:false},
        //     ]},
        // ];
        // let arrBuilded = build("{parent:{b:{xx:string},a:string}}");
        // console.log(arrBuilded);
    })
});