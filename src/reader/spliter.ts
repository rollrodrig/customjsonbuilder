export interface ISplitble {
  addVertex(left: number): void
  addConnection(right: number): void
  done(): void
}

export interface TSpliterData {
  left: number
  right: number
  parent?: number
}

export class SpliterStrategy {
  private stack: number[] = []
  public pattern: string = ''
  public client: ISplitble | any

  private isStackEmpty(): boolean {
    return this.stack.length <= 0
  }

  private addVertex(left: number): void {
    this.stack.push(left)
    this.client.addVertex(left)
  }

  private addConnection(right: number): void {
    this.stack.pop()
    this.client.addConnection(right)
  }

  run(): void {
    const l = this.pattern.length

    for (let x = 0; x < l; x++) {
      const char = this.pattern.charAt(x)

      if (char === '{') {
        this.addVertex(x)
      }

      if (char === '}') {
        this.addConnection(x)
      }
    }

    if (this.isStackEmpty()) {
      this.client.done()
    }
  }
}
