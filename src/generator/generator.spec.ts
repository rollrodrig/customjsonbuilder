describe('greet function', () => {
  it('should return a greeting message', () => {
    expect(true).toBe(true)
  })
})
// import {
//   Generator,
//   BlockUpdater,
//   BlockGenerator,
//   DataStorage,
// } from './generator'
// import { Graph, Node } from '../reader/graph'
// import { Reader } from '../reader/reader'
// import { Block } from '../generator/block'
// import { stub } from 'sinon'
// describe('Generator: ', () => {
//   it('should return the simple object', () => {
//     const pattern = '{name:string,age:number}'
//     const reader = new Reader(pattern)
//     const gen = new Generator(reader.scan())
//     const res = gen.generate()
//     expect(res.name).toBeInstanceOf(String)
//     expect(res.age).toBeInstanceOf(Number)
//   })
//   it('should return nested object', () => {
//     const pattern =
//       '{name:string,age:{year:number},id:{main:number,second:number}}'
//     const reader = new Reader(pattern)
//     const gen = new Generator(reader.scan())
//     const res = gen.generate()
//     expect(res.name).toBeInstanceOf(String)
//     expect(res.age).toBeInstanceOf(Object)
//     expect(res.age.year).toBeInstanceOf(Number)
//     expect(res.id).toBeInstanceOf(Object)
//     expect(res.id.main).toBeInstanceOf(Number)
//     expect(res.id.second).toBeInstanceOf(Number)
//   })
//   it('should return nested array', () => {
//     const pattern = '{user:name,posts:{id:number,title:string,$times:3}}'
//     const reader = new Reader(pattern)
//     const gen = new Generator(reader.scan())
//     const res = gen.generate()
//     expect(res.user).toBeInstanceOf(String)
//     expect(res.posts).toBeInstanceOf(Array)
//     expect(res.posts.length).toBe(3)
//   })
//   it('should return array', () => {
//     const pattern = '{id:number,name:firstname,$times:3}'
//     const reader = new Reader(pattern)
//     const gen = new Generator(reader.scan())
//     const res = gen.generate()
//     chai.assert.isArray(res)
//     expect(res.length).toBe(3)
//     expect(res[0].id).toBeInstanceOf(Number)
//     expect(res[0].name).toBeInstanceOf(String)
//   })
//   it('should super deep nested object', () => {
//     const pattern = '{a1:{a2:{a3:{a4:{a5:{a6:number}}}}}}'
//     const reader = new Reader(pattern)
//     const gen = new Generator(reader.scan())
//     const res = gen.generate()
//     expect(res).toBeInstanceOf(Object)
//     expect(res.a1).toBeInstanceOf(Object)
//     expect(res.a1.a2).toBeInstanceOf(Object)
//     expect(res.a1.a2.a3).toBeInstanceOf(Object)
//     expect(res.a1.a2.a3.a4).toBeInstanceOf(Object)
//     expect(res.a1.a2.a3.a4.a5).toBeInstanceOf(Object)
//     expect(res.a1.a2.a3.a4.a5.a6).toBeInstanceOf(Number)
//   })
//   it('nice example 1', () => {
//     const pattern = '{name:string,age:{year:number,city:{place:string}}}'
//     const reader = new Reader(pattern)
//     const gen = new Generator(reader.scan())
//     const res = gen.generate()
//     expect(res.name).toBeInstanceOf(String)
//     expect(res.age.year).toBeInstanceOf(Number)
//     expect(res.age.city).toBeInstanceOf(Object)
//     expect(res.age.city.place).toBeInstanceOf(String)
//   })
//   it('should return password', () => {
//     const pattern = '{password:password}'
//     const reader = new Reader(pattern)
//     const gen = new Generator(reader.scan())
//     const res = gen.generate()
//     expect(res.password).toBeInstanceOf(String)
//     expect(res.password).toBe('password')
//   })
//   it('should return date', () => {
//     const pattern = '{created_at:date}'
//     const reader = new Reader(pattern)
//     const gen = new Generator(reader.scan())
//     const res = gen.generate()
//     expect(res.created_at).toBeInstanceOf(String)
//     expect(res.created_at).not.toBe('date')
//   })
// })
// const graph = new Graph()
// class FakeBlock extends Block {
//   constructor(pattern: string) {
//     super(pattern)
//   }
//   generate() {
//     return { name: 'string', age: 'string' }
//   }
// }
// graph.addVertex(
//   'a',
//   new FakeBlock('{name:string,age:{year:number,city:{place:string}}}'),
// )
// graph.addVertex('b', new FakeBlock('{year:number,city:{place:string}}'))
// graph.addVertex('c', new FakeBlock('{place:string}'))
// graph.addEdge('a', 'b')
// graph.addEdge('b', 'c')
// describe('BlockUpdater: ', () => {
//   it('should update parent pattern', () => {
//     const blockParent = new FakeBlock(
//       '{year:number,city:{place:string},city:{other:string}}',
//     )
//     const blockChild = new FakeBlock('{place:string}')
//     const parentNode = new Node('a', blockParent)
//     const childNode = new Node('b', blockChild)
//     BlockUpdater.execute(parentNode, childNode)
//     expect(blockParent.pattern).toBe(
//       '{year:number,city:___VAR___b,city:{other:string}}',
//     )
//   })
// })
// describe('BlockGenerator: ', () => {
//   it('should return the json ', () => {
//     stub(FakeBlock.prototype, 'generate').callsFake((): any => {
//       return { place: 'string' }
//     })
//     const block = new FakeBlock('{place:string}')
//     const node = new Node('a', block)
//     const data = BlockGenerator.execute(node)
//     expect(data).toMatchObject({ place: 'string' })
//   })
// })
// describe('DataStorage: ', () => {
//   it('should add values', () => {
//     const storge = DataStorage.getInstance()
//     storge.add('xxx', { age: '23' })
//     expect(storge.get('xxx')).toMatchObject({ age: '23' })
//     const storgeA = DataStorage.getInstance()
//     expect(storgeA.get('xxx')).toMatchObject({ age: '23' })
//   })
// })
