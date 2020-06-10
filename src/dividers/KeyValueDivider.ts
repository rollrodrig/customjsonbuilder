export interface TKeyValueDivider {
    key: string;
    value: string;
}
/**
 *
 * split the string in : and return the object
 * @param {string} s
 * @returns {TKeyValueDivider}
 */
export  const keyValueDivider = (s: string): TKeyValueDivider => {
    const splited = s.split(/:(.*)/);
    return {
        key: splited[0],
        value: splited[1]
    };
};
