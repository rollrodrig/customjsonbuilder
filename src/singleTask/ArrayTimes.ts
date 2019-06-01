 import { removeSquareBrackets } from './RemoveSquareBrackets';
/**
 * return the array length
 * @param {*} s
 * @returns {number}
 */
export const nanError = "array length is NaN";
export const wrongFormat = "wrong array format";
export const arrayTimes = (s:any):number => {
    let string:string = removeSquareBrackets(s);
    let splited = string.split(";");
    if(splited.length !== 2) {
        throw SyntaxError(`${wrongFormat} ${s}`);
    }
    let times = parseInt(splited[1]);
    if( isNaN(times) ) {
        throw TypeError(`${nanError} ${s}`);
    }
    return (times<0)?times*-1:times;
}