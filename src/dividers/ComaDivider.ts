export const comaDivider = (string:string) => {
    let braces:number = 0;
    let indexes:number[] = [];
    let divided:string[] = [];
    let l = string.length;
    for (let i = 0; i < l; i++) {
        let c = string.charAt(i);
        if(c === "{")
            braces++;
        if(c === "}")
            braces--;
        if(c === "," && braces === 0) 
            indexes.push(i);
    }
    indexes.push(string.length);
    indexes.reduce((prev:number,next:number)=>{
        divided.push(string.substring(prev,next));
        return next+1;
    },0)
    return divided;
}

// let pattern = /(?:(\[|\{).*?(\]|\})|[^,])+/g;
// let pattern = /(?:(\{).*?(\})|[^,])+/g;
// let arr = string.match(pattern);
// return arr;