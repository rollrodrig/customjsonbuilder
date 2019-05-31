import { OptsGenerator ,TOptsGenerator } from "../generators/OptsGenerator";
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
    let opts = OptsGenerator(splited[1])
    return {
        key: k,
        opts:opts
    }
}
