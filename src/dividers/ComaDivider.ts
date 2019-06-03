export const comaDivider = (string:string) => {
    let pattern = /(?:(\[|\{).*?(\]|\})|[^,])+/g;
    let arr = string.match(pattern);
    return arr
}
