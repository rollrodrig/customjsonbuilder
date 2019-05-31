import { TOptsGenerator } from "./OptsGenerator";
 /**
 *
 * @param {string} string
 * @returns TKeyOpts
 */
export interface TKeyOpts {
    key:string,
    opts: TOptsGenerator
}
export const keyOpts = (string:string): TKeyOpts => {
    let splited = string.split(":");
    let k = splited[0];
    return {
        key: k,
        opts:{
            type:"string",
            min:10,
            max:20,
            default:[]
        }
    }
}
