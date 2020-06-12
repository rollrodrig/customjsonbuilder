import { IElement, GenericElement } from './element';
export class List extends GenericElement {
    generate(): any {
        // let value = this.childs.map((c: IElement) => {
        //     return c.generate()
        // })
        return [];
    }
}
