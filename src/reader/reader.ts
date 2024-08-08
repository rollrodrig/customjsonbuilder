import { v4 as uuidv4 } from 'uuid'
import { SpliterStrategy, ISplitble } from './spliter'
import { Graph } from './graph'
import { randomString } from '../utils/utils'
import { Block } from '../generator/block'

export class StackInfo {
  id: string
  left: number
  right: number

  constructor(id: string, left: number) {
    this.id = id
    this.left = left
    this.right = 0
  }
}

export class Reader implements ISplitble {
  public pattern: string

  private graph: Graph
  private spliter: SpliterStrategy
  private stack: StackInfo[] = []
  private splitsDone = false

  constructor(pattern: string) {
    this.pattern = pattern
    this.graph = new Graph()
    this.spliter = new SpliterStrategy()
    this.spliter.client = this
    this.spliter.pattern = pattern
  }

  private unitqueId(): string {
    return uuidv4()
  }

  private lastItemFromStack(): any {
    return this.stack[this.stack.length - 1]
  }

  private createOneStack(left: number): StackInfo {
    const stackInfo = new StackInfo(this.unitqueId(), left)
    this.stack.push(stackInfo)

    return stackInfo
  }

  private createBlock(stackInfo: StackInfo): Block {
    const subPattern = this.pattern.substring(
      stackInfo.left,
      stackInfo.right + 1,
    )

    return new Block(subPattern)
  }

  private popFromStack(): any {
    return this.stack.pop()
  }

  done(): void {
    this.splitsDone = true
  }

  addVertex(left: number): void {
    const stackInfo: StackInfo = this.createOneStack(left)
    const block: Block = this.createBlock(stackInfo)
    this.graph.addVertex(stackInfo.id, block)
  }

  addConnection(right: number): void {
    const childStackInfo: StackInfo = this.popFromStack()
    childStackInfo.right = right
    const block: Block = this.createBlock(childStackInfo)
    this.graph.updateNodeData(childStackInfo.id, block)
    const parentStackInfo: StackInfo = this.lastItemFromStack()

    if (parentStackInfo) {
      this.graph.addEdge(parentStackInfo.id, childStackInfo.id)
    }
  }

  scan(): Graph {
    this.spliter.run()

    return this.graph
  }
}
