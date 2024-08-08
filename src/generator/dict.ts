import { IElement, GenericElement } from './element'
export class Dict extends GenericElement {
  payload = {}
  constructor(key?: string, value?: IElement) {
    super()

    if (key && value) {
      this.payload = {
        [key]: value.generate(),
      }
    }
  }
  generate(): any {
    this.elements.map((c: IElement) => {
      const tmp = c.generate()
      this.payload = { ...this.payload, ...tmp }
    })

    return this.payload
  }
}
