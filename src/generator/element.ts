export interface IElement {
    key: string;
    value: IElement;
    generate(): any
}
abstract class CompoundElement implements IElement {
    key: string;
    value: IElement;
    childs: IElement[] = []
    constructor(key: string) {
        this.key = key
    }
    generate(): any {
        let value = {}
        this.childs.map((c: IElement) => {
            let tmp = c.generate()
            value = {
                ...value,
                ...tmp
            }
        })
        return {[this.key]: value};
    }
    add(c: IElement): void {
        this.childs.push(c)
    }
}
export class ListElement extends CompoundElement {
}
// export class DictionaryElement extends IElement {
export class DictionaryElement implements IElement {
    key: string;
    value: IElement;
    childs: IElement[] = []
    constructor(key: string) {
        this.key = key
    }
    generate(): any {
        let value = {}
        this.childs.map((c: IElement) => {
            let tmp = c.generate()
            value = {
                ...value,
                ...tmp
            }
        })
        return {[this.key]: value};
    }
    add(c: IElement): void {
        this.childs.push(c)
    }
}
export class KeyValueElement<T> implements IElement {
    key: string;
    value: IElement;
    final: IFinalElement<T>;
    constructor(key: string, final: IFinalElement<T>) {
        this.key = key;
        this.final = final;
    }
    generate(): {[key: string]: T} {
        return {[this.key]: this.final.generate()};
    }
}

// Final Element
export interface IFinalElement<T> {
    generate(): T;
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
export class StaticElement<T> implements IFinalElement<T> {
    value: T;
    constructor(value: T) {
        this.value = value;
    }
    generate(): T  {
        return this.value;
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
