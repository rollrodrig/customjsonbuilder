import { valueParser } from './index'

describe('valueParser', () => {
  it('Should return same value', () => {
    const value = valueParser('abc')
    expect(value).toBe('abc')
    const value2 = valueParser('12345')
    expect(value2).toBe('12345')
  })
  it('Should return a valid value', () => {
    const value = valueParser('string')
    expect(typeof value).toBe('string')
  })

  it('Should return a valid number', () => {
    const value = valueParser('number')
    expect(typeof value).toBe('number')
  })

  it('Should return a valid boolean', () => {
    const value = valueParser('boolean')
    expect(typeof value).toBe('boolean')
  })

  it('Should return null', () => {
    const value = valueParser('null')
    expect(value).toBeNull()
  })

  it('Should return undefined', () => {
    const value = valueParser('undefined')
    expect(value).toBeUndefined()
  })

  it('Should return an empty string', () => {
    const value = valueParser('empty')
    expect(value).toBe('')
  })

  it('Should return true', () => {
    const value = valueParser('true')
    expect(value).toBe(true)
  })

  it('Should return false', () => {
    const value = valueParser('false')
    expect(value).toBe(false)
  })

  it('Should return a valid name', () => {
    const value = valueParser('name')
    expect(typeof value).toBe('string')
  })

  it('Should return a valid firstname', () => {
    const value = valueParser('firstname')
    expect(typeof value).toBe('string')
  })

  it('Should return a valid lastname', () => {
    const value = valueParser('lastname')
    expect(typeof value).toBe('string')
  })

  it('Should return a valid age', () => {
    const value = valueParser('age')
    expect(typeof value).toBe('number')
    expect(value).toBeGreaterThanOrEqual(18)
    expect(value).toBeLessThanOrEqual(90)
  })

  it('Should return a valid age18', () => {
    const value = valueParser('age18')
    expect(typeof value).toBe('number')
    expect(value).toBeGreaterThanOrEqual(18)
    expect(value).toBeLessThanOrEqual(90)
  })

  it('Should return a valid agekid', () => {
    const value = valueParser('agekid')
    expect(typeof value).toBe('number')
    expect(value).toBeGreaterThanOrEqual(1)
    expect(value).toBeLessThanOrEqual(17)
  })

  it('Should return a valid username', () => {
    const value = valueParser('username')
    expect(typeof value).toBe('string')
  })

  it('Should return a valid email', () => {
    const value = valueParser('email')
    expect(typeof value).toBe('string')
  })

  it('Should return a valid password', () => {
    const value = valueParser('password')
    expect(typeof value).toBe('string')
  })

  it('Should return a valid uuid', () => {
    const value = valueParser('uuid')
    expect(typeof value).toBe('string')
  })

  it('Should return a valid title', () => {
    const value = valueParser('title')
    expect(typeof value).toBe('string')
  })

  it('Should return a valid text', () => {
    const value = valueParser('text')
    expect(typeof value).toBe('string')
  })

  it('Should return a valid word', () => {
    const value = valueParser('word')
    expect(typeof value).toBe('string')
  })

  it('Should return valid words', () => {
    const value = valueParser('words')
    expect(typeof value).toBe('string')
  })

  it('Should return a valid paragraph', () => {
    const value = valueParser('paragraph')
    expect(typeof value).toBe('string')
  })

  it('Should return valid paragraphs', () => {
    const value = valueParser('paragraphs')
    expect(typeof value).toBe('string')
  })

  it('Should return a valid date', () => {
    const value = valueParser('date')
    expect(typeof value).toBe('string')
  })
})
