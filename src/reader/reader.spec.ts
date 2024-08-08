import { Reader } from './reader'
import { Graph } from './graph'
describe('Reader: ', () => {
  it('.should add vertex', () => {
    const pattern = '{name:string,age:{year:number}}'
    const r = new Reader(pattern)
    const graph: Graph = r.scan()
    expect(graph).toBeInstanceOf(Graph)
    expect(graph.nodes).toBeInstanceOf(Object)
  })
})
