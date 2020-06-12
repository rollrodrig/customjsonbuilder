import { IElement } from './element';
export class StaticValue<T> implements IElement {
    value: T;
    constructor(value: T) {
        this.value = value;
    }
    generate(): T  {
        return this.value;
    }
}
export class StringValue implements IElement {
    generate(): string {
        return "RgerGERrrJR";
    }
}
export class NameValue implements IElement {
    generate(): string {
        return "rolly"
    }
}
export class EmailValue implements IElement {
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
