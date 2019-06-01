export const keyOpts = (string:string) => {
    let splited = string.split(":");
    let k = splited[0];
    return ["name:string","email:string"]
}
