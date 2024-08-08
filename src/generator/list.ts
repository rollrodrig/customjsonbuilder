import { IElement, GenericElement } from './element'
export class List extends GenericElement {
  payload: IElement[] = []
  constructor(value?: IElement) {
    super()

    if (value) {
      this.elements.push(value)
    }
  }
  generate(): any {
    this.elements.map((c: IElement) => {
      const tmp = c.generate()
      this.payload.push(tmp)
    })

    return this.payload
  }
}
