import { firstChar } from "./FirstChar";
import { lastChar } from "./LastChar";
export const removeSquareBrackets = (s: string): string => {
    let string: string = s;
    if (firstChar(string) === "[") {
        string = string.substring(1);
    }
    if (lastChar(string) === "]") {
        string = string.substring(0, string.length - 1);
    }
    return string;
};
