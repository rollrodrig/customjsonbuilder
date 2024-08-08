import { IGraphable } from '../reader/graph'
import { FormatString } from './format-string'
export interface IBlock {}
export class Block implements IBlock, IGraphable {
  private content: any = {}
  private fomater: FormatString
  public pattern: string
  private _lockedPattern: string
  public get lockedPattern(): string {
    return this._lockedPattern
  }
  constructor(pattern: string) {
    this.pattern = pattern
    this._lockedPattern = this.pattern
    this.fomater = new FormatString(this.pattern)
  }
  replaceSubPatterns(subpattern: string, vertex: string): string {
    this.pattern = this.pattern.replace(subpattern, vertex)

    return this.pattern
  }
  clone(): Block {
    const block = new Block(this.pattern)

    return block
  }
  generate() {
    this.content = this.fomater.generate()

    return this.content
  }
}
