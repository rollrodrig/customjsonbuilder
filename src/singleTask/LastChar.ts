import { isEmpty } from "../validator/IsEmpty";
export const lastChar = (string: any) => {
    if (isEmpty(string)) {
        throw Error("string is empty");
    }
    return string.charAt(string.length - 1);
};
