import { firstChar } from '../singleTask/FirstChar';
import { lastChar } from '../singleTask/LastChar';
export const isArray = (q:any) => {
    return /^\[\]$/.test(firstChar(q)+lastChar(q));
}
