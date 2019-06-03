export const isBracesEquals = (string:any) => {
    let o:any[] = [], c:any[] = [];
    let l:any = string.match(/\{/g);
    let r:any = string.match(/\}/g);
    if(l) o = l;
    if(r) c = r;
    return o.length ===  c.length;
}