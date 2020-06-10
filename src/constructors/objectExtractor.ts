export const objectExtractor = (string: string): string => {
    const obj = string.match(/{.*}/);
    return obj[0];
};
