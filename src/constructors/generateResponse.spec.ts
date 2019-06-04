import { assert, expect } from 'chai';
import { generateResponse } from './generateResponse';
import { TBuild } from './build';

describe('generateResponse: ', () => {
    it('simple lineal response', () => {
        let b:TBuild[], r:any;
        b = [{key:"name",value:"firstname",nested:false,times:-1}];
        r = generateResponse(b);
        expect(r).to.deep.equal({name:r.name});
        b = [
            {key:"name",value:"firstname",nested:false,times:-1},
            {key:"email",value:"email",nested:false,times:-1},
        ];
        r = generateResponse(b);
        expect(r).to.deep.equal({name:r.name, email:r.email});

        b = [
            {key:"name",value:"firstname",nested:false,times:-1},
            {key:"email",value:"email",nested:false,times:-1},
            {key:"age",value:"number",nested:false,times:-1},
        ];
        r = generateResponse(b);
        expect(r).to.deep.equal({name:r.name, email:r.email, age:r.age});
    });

    it('nested object response', () => {
        let b:TBuild[], r:any;
        b = [
            {key:"name",value:"firstname",times:-1,nested:false},
            {key:"post",value:"object",times:-1,nested:[
                {key:"title", value:"title", times:-1, nested:false},
                {key:"body", value:"paragraph", times:-1, nested:false},
            ]},
        ];
        r = generateResponse(b);
        expect(r).to.deep.equal({name:r.name,post:{title:r.post.title,body:r.post.body}});

        b = [
            {key:"name",value:"firstname",times:-1,nested:false},
            {key:"post",value:"object",times:-1,nested:[
                {key:"title", value:"title", times:-1, nested:false},
                {key:"body", value:"paragraph", times:-1, nested:false},
                {key:"author", value:"object", times:-1, nested:[
                    {key:"name", value:"firstname", times:-1, nested:false},
                    {key:"age", value:"number", times:-1, nested:false},
                ]},
            ]},
        ];
        r = generateResponse(b);
        expect(r).to.deep.equal({name:r.name,post:{title:r.post.title,body:r.post.body,author:{name:r.post.author.name,age:r.post.author.age}}});

        
    })

    it('nested array response', () => {
        let b:TBuild[], r:any;
        b = [
            {key:"authors",value:"array",times:3,nested:[
                {key:"name",value:"firstname", times:-1, nested:false},
                {key:"books",value:"number", times:-1, nested:false},
            ]},
        ];
        r = generateResponse(b);
        assert.isArray(r.authors);
        expect(r.authors.length).eq(3);
        
        b = [
            {key:"name",value:"firstname",times:-1,nested:false},
            {key:"posts",value:"array",times:2,nested:[
                {key:"title", value:"title", times:-1, nested:false},
                {key:"body", value:"paragraph", times:-1, nested:false},
            ]},
        ];
        r = generateResponse(b);
        assert.isArray(r.posts);
        expect(r.posts.length).eq(2)
    })


    it('nested object array response', () => {
        let b:TBuild[], r:any;
        b = [
            {key:"institute",value:"firstname",times:-1,nested:false},
            {key:"post",value:"object",times:-1,nested:[
                {key:"title", value:"title", times:-1, nested:false},
                {key:"body", value:"paragraph", times:-1, nested:false},
            ]},
            {key:"authors",value:"array",times:3,nested:[
                {key:"name",value:"firstname", times:-1, nested:false},
                {key:"books",value:"number", times:-1, nested:false},
            ]}
        ];
        r = generateResponse(b);
        expect(r.post).to.deep.equal({title:r.post.title,body:r.post.body});

        assert.isArray(r.authors);
        expect(r.authors.length).eq(3)
    })
});