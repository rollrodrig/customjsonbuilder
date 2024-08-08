export interface IElement {
  generate(): any
}
export abstract class GenericElement implements IElement {
  key: string = ''
  value: IElement | any
  elements: IElement[] = []
  add(c: IElement): void {
    this.elements.push(c)
  }
  abstract generate(): any
}
