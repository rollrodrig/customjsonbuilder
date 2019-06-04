"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @param {string} string
 * @returns {TOptsGenerator}
 */
exports.OptsGenerator = (string) => {
    return { type: string };
};
// let splited:string[] = string.split("|");
//     let opts:any = {
//         type:null,
//         min:10,
//         max:20,
//         default:[]
//     };
//     if(splited.length > 1) {
//         opts.type = splited.shift();
//         splited.map((s:string)=>{
//             let tmpOpt = s.split("=");
//             if(tmpOpt[0]==="default") {
//             }else {
//                 opts[tmpOpt[0]] = parseInt(tmpOpt[1]);
//             }
//         });
//     }else {
//         opts.type = splited[0]
//     }
//     return opts;
