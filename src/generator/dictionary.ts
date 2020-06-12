import { IElement, GenericElement } from './element';
export class Dictionary extends GenericElement {
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
