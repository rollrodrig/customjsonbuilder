export const objectExtractor = (string:string):string => {
    let obj = string.match(/{.*}/);
    return obj[0]
}