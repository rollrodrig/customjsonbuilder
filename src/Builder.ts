import faker from 'faker';
import { build } from './constructors/build';
import { generateResponse } from './constructors/generateResponse';
export default class Builder {
    pattern:string;
    response:any;
    constructor(p?:any){
        this.pattern = p;
    }
    setPattern(p:string) {
        this.pattern = p;
    }
    getResponse() {
        this.response = generateResponse(build(this.pattern))
        return this.response;
    }
}