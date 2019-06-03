import { spaceCleaner } from "./singleTask/SpaceCleaner";
import { isObject } from "./validator/isObject";
import { isArray } from "./validator/isArray";
import { removeCurlyBraces } from "./singleTask/RemoveCurlyBraces";
import { removeSquareBrackets } from './singleTask/RemoveSquareBrackets';
import { comaDivider } from "./dividers/ComaDivider";
import { keyValueDivider, TKeyValueDivider } from './dividers/KeyValueDivider';

class Constructor {
    string:string;
    commaDivided:any[];
    constructor(string:string) {
        this.string = string;
    }
    go() {
        this.string = spaceCleaner(this.string);
        if(isObject(this.string)) {
            this.string = removeCurlyBraces(this.string);
        }
        if(isArray(this.string)) {
            this.string = removeSquareBrackets(this.string);
        }
        this.commaDivided = comaDivider(this.string);
        this.commaDivided.map((couple:string)=>{
            let kv:TKeyValueDivider = keyValueDivider(couple);
        })
    }
    end() {
        
    }
}
export default Constructor;