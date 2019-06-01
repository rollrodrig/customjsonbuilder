import { isArray } from "./IsArray";
import { isObject } from "./IsObject";
export const isValue = (s:any) => {
    return !(isArray(s) || isObject(s));
}
