import { IFinalElement } from './final_element';

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
    abstract generate(): any;
    add(c: IElement): void {
        this.childs.push(c)
    }
}
export class ListElement extends CompoundElement {
    generate(): any {
        let value = this.childs.map((c: IElement) => {
            return c.generate()
        })
        return value;
    }
}
export class DictionaryElement extends CompoundElement {
    generate(): any {
        let value = {}
        this.childs.map((c: IElement) => {
            let tmp = c.generate()
            value = {...value, ...tmp}
        })
        return {[this.key]: value};
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
export class ValueElement<T> implements IElement {
    key: string;
    value: IElement;
    final: IFinalElement<T>;
    constructor(final: IFinalElement<T>) {
        this.final = final;
    }
    generate(): T {
        return this.final.generate();
    }
}
