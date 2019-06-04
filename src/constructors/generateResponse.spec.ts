import { assert, expect } from 'chai';
// import { generateResponse } from './generateResponse';
import { TBuild } from './build';

function generateResponse(build:TBuild[]) {
    let response:any = {};
    build.map((b:TBuild)=>{
        response[b.key] = "rolly";
    })
    return response;
}

describe('generateResponse: ', () => {
    it('should return type=string', () => {
        // expect(generateResponse("[{name:string};10]")).to.eq("{name:string}");
        let b1:TBuild[] = [{key:"name",value:"string",nested:false,times:-1}];
        generateResponse(b1);
    });
});