import faker from 'faker';
import { build } from './constructors/build';
import { generateResponse } from './constructors/generateResponse';
import { spaceCleaner } from './singleTask/SpaceCleaner';
import { isBracesEquals } from './validator/isBracesEquals';
import { isSquareEquals } from './validator/isSquareEquals';
class Builder {
    pattern:string;
    response:any;
    constructor(p?:any){
        this.pattern = p;
    }
    setPattern(p:string) {
        this.pattern = p;
    }
    validatePattern() {
        this.pattern = spaceCleaner(this.pattern);
        if(isBracesEquals(this.pattern) === false) {
            throw SyntaxError("Syntax error, make sure open and close {} are in the pattern")
        }
        if(isSquareEquals(this.pattern) === false) {
            throw SyntaxError("Syntax error, make sure open and close [] are in the pattern")
        }
    }
    getResponse() {
        this.validatePattern()
        this.response = generateResponse(build(this.pattern))
        return this.response;
    }
}
export = Builder;