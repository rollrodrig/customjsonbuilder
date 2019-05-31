import { firstChar } from './utils/FirstChar';
import { lastChar } from './utils/LastChar';
export const isObject = (q:any) => {
    return /^\{\}$/.test(firstChar(q)+lastChar(q));
}