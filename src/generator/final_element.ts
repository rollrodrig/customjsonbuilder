export interface IFinalElement<T> {
    generate(): T;
}
export class StaticElement<T> implements IFinalElement<T> {
    value: T;
    constructor(value: T) {
        this.value = value;
    }
    generate(): T  {
        return this.value;
    }
}
export class StringElement implements IFinalElement<string> {
    generate(): string {
        return "RgerGERrrJR";
    }
}
export class NameElement implements IFinalElement<string> {
    generate(): string {
        return "rolly"
    }
}
export class EmailElement implements IFinalElement<string> {
    generate(): string {
        return "rolly@codemente.com"
    }
}
// export class EmailElement extends CommonElement {
//     generate(): {[key: string]: string} {
//         return {[this.key]: "hola@codemente.com"};
//     }
// }
// export class NumberElement extends CommonElement {
//     generate(): {[key: string]: number} {
//         return {[this.key]: 32432};
//     }
// }
// export class BooleanElement extends CommonElement {
//     generate(): {[key: string]: boolean} {
//         return {[this.key]: true};
//     }
// }
// export class ArrElement extends CommonElement {
//     generate(): any {
//         return 'a';
//     }
// }
