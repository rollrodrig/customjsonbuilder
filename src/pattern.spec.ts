import { parsePattern } from './index'

describe('parsePattern', () => {
  it('Should parse to a valid json', () => {
    const pattern = '{string:string}'
    const parsed = parsePattern(pattern)
    expect(parsed).toEqual({ string: 'string' })
  })
  it('Should parse to a valid json', () => {
    const pattern = '{string:string,number:{a:number,b:number}}'
    const parsed = parsePattern(pattern)
    expect(parsed).toEqual({
      string: 'string',
      number: { a: 'number', b: 'number' },
    })
  })
  it('Should parse to a valid json with times', () => {
    const pattern = '{string:string,number:{a:number,b:number,_times:3}}'
    const parsed = parsePattern(pattern)
    expect(parsed).toEqual({
      string: 'string',
      number: { a: 'number', b: 'number', _times: '3' },
    })
  })
  it('Should parse to a valid json with times', () => {
    const pattern = '{string:string,number:{__:number,_times:3}}'
    const parsed = parsePattern(pattern)
    expect(parsed).toEqual({
      string: 'string',
      number: { __: 'number', _times: '3' },
    })
  })
})
