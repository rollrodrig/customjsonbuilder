import { interfaces } from "mocha";
import { Dict } from '../generator/dict';
import { List } from '../generator/list';
import {
    StaticValue,
    NameValue,
    StringValue
} from '../generator/value';
import { throws } from "assert";

export interface IBlock {
    generate(): any;
}
export class FormatString {
    private s: string;
    private chars: string[]
    private response: {[key: string]: string} = {}
    constructor(s: string) {
        this.s = s;
    }
    private removeFirstLastBraces() {
        this.s = this.s.substring(1);
        this.s = this.s.substring(0, this.s.length - 1)
    }
    private splitInPairs() {
        return this.s.split(',');
    }
    private addResponse(key: string, value: string) {
        this.response[key] = value;
    }
    format(): any {
        this.removeFirstLastBraces();
        let pairs = this.splitInPairs();
        pairs.map((pair: string) => {
            let keyValue = pair.split(":");
            this.addResponse(keyValue[0], keyValue[1]);
        })
        return this.response;
    }
    getResponse() {
        return this.response;
    }
}
export class Block implements IBlock {
    s: string;
    constructor(s: string) {
        this.s = s;
    }

    generate() {
        // let list = new List();
        return {}
    }
}
