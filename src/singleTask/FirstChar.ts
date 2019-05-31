import { isEmpty } from '../logicals/IsEmpty';
export const firstChar = (string:any) => {
    if(isEmpty (string)) {
        throw Error('string is empty');
    }
    return string.charAt(0);
};