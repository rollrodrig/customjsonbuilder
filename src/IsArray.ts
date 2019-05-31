import { firstChar } from './utils/FirstChar';
import { lastChar } from './utils/LastChar';
export const isArray = (q:any) => {
    return /^\[\]$/.test(firstChar(q)+lastChar(q));
}
