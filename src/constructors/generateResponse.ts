import { TBuild } from "./build";
import { fakerGenerator } from './fakerGenerator';
export const generateResponse = (build:TBuild []) => {
    let response:any = {};
    build.map((b:TBuild)=>{
        if(b.value === 'object') {
            response[b.key] = generateResponse(b.nested)
        }else if(b.value === 'array') {
            let arr = [];
            for(let i = 0; i < b.times; i++) {
                arr.push(generateResponse(b.nested))
            }
            response[b.key] = arr;
        } else {
            response[b.key] = fakerGenerator (b.value);
        }
    })
    return response;
}