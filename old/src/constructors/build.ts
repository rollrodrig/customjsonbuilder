import { comaDivider } from "../dividers/ComaDivider";
import { keyValueDivider } from "../dividers/KeyValueDivider";
import { arrayTimes } from "../singleTask/ArrayTimes";
import { removeCurlyBraces } from "../singleTask/RemoveCurlyBraces";
import { removeSquareBrackets } from "../singleTask/RemoveSquareBrackets";
import { spaceCleaner } from "../singleTask/SpaceCleaner";
import { isArray } from "../validator/isArray";
import { isObject } from "../validator/isObject";
import { objectExtractor } from "./objectExtractor";
export interface TBuild {
    key: string;
    value: string;
    nested?: any;
    times?: number;
}
export const build = (s: string) => {
    let string = s;
    if (isObject(string)) {
        string = removeCurlyBraces(string);
    }
    if (isArray(string)) {
        string = removeSquareBrackets(string);
    }
    const kvArray = comaDivider(string);
    const response: TBuild[] = kvArray.map((kv: string): TBuild => {
        const k = keyValueDivider(kv);
        const key = k.key;
        let value = "string";
        let nested: any = false;
        let times = -1;
        if (isObject(k.value)) {
            value = "object";
            nested = build(k.value);
        } else if (isArray(k.value)) {
            value = "array";
            nested = build(objectExtractor(k.value));
            times = arrayTimes(k.value);
        } else {
            value = k.value;
            nested = false;
        }
        const obj: TBuild = {
            key,
            value,
            nested,
            times
        };
        return obj;
    });
    return response;
};
