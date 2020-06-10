export = customjsonbuilder;
declare class customjsonbuilder {
    constructor(pattern?:string);
    setPattern(pattern:string): void;
    getResponse(): any;
    static generateJson(pattern:string): any;
}