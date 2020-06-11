interface Element {
    key: string;
    value: Element;
    generate(): any
}
abstract class CompoundElement implements Element {
    key: string;
    value: Element;
    childs: Element[] = []
    constructor(key: string) {
        this.key = key
    }
    generate(): any {
        let value = {}
        this.childs.map((c: Element) => {
            let tmp = c.generate()
            value = {
                ...value,
                ...tmp
            }
        })
        return {[this.key]: value};
    }
    add(c: Element): void {
        this.childs.push(c)
    }
}
export class DictionaryElement extends CompoundElement {
}
export class ListElement extends CompoundElement {
}
abstract class CommonElement implements Element {
    key: string;
    value: Element;
    constructor(key: string) {
        this.key = key
    }
    abstract generate(): any
}
export class StringElement extends CommonElement {
    generate(): {[key: string]: string} {
        return {[this.key]: "RgerGERrrJR"};
    }
}
export class NameElement extends CommonElement {
    generate(): {[key: string]: string} {
        return {[this.key]: "rolly"};
    }
}
export class EmailElement extends CommonElement {
    generate(): {[key: string]: string} {
        return {[this.key]: "hola@codemente.com"};
    }
}
export class NumberElement extends CommonElement {
    generate(): {[key: string]: number} {
        return {[this.key]: 32432};
    }
}
export class BooleanElement extends CommonElement {
    generate(): {[key: string]: boolean} {
        return {[this.key]: true};
    }
}
export class StaticElement extends CommonElement {
    staticValue: any
    constructor(key: string, value: any) {
        super(key);
        this.staticValue = value;
    }
    generate(): any {
        return {[this.key]: this.staticValue};
    }
}
export class ArrElement extends CommonElement {
    generate(): any {
        return 'a';
    }
}
