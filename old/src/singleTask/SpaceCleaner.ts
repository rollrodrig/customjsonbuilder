 /**
 * remove spaces from string and return that string
 * @param {string} string
 * @returns
 */
export const spaceCleaner = (string: string): string => {
    return string.replace(/\s/g, "");
};
