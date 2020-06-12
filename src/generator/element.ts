export interface IElement {
    generate(): any
}
abstract class GenericElement implements IElement {
    key: string;
    value: IElement;
    elements: IElement[] = []
    add(c: IElement): void {
        this.elements.push(c)
    }
    abstract generate(): any;
}
export class DictionaryElement extends GenericElement {
    payload = {}
    constructor(key?: string, value?: IElement) {
        super();
        this.key = key;
        this.value = value;
        if (this.key && this.value) {
            this.payload = {
                [this.key]: this.value.generate()
            }
        }
    }
    generate(): any {
        this.elements.map((c: IElement) => {
            let tmp = c.generate()
            this.payload = {...this.payload, ...tmp}
        })
        return this.payload;
    }
}
export class ListElement extends GenericElement {
    generate(): any {
        // let value = this.childs.map((c: IElement) => {
        //     return c.generate()
        // })
        return [];
    }
}
















export class KeyValueElement<T> implements IElement {
    key: string;
    value: IElement;
    final: IElement;
    constructor(key: string, final: IElement) {
        this.key = key;
        this.final = final;
    }
    generate(): {[key: string]: T} {
        return {[this.key]: this.final.generate()};
    }
}

