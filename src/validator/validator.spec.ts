import { Validator } from './validator'
describe('Validator: ', () => {
  it('.run: count the numbers of {} and  [] are the same', () => {
    const i = new Validator()
    expect(i.run('[{name:string}]')).toBe(true)
    expect(i.run('[{name:string}]')).toBe(true)
    expect(i.run('[{name:string, phone:{something}}]')).toBe(true)
    expect(i.run('{name:string, phone:{something}}')).toBe(true)
    expect(i.run('{name}')).toBe(true)
    expect(i.run('{}')).toBe(true)
    expect(i.run('nothing')).toBe(true)
    expect(i.run('')).toBe(true)
    expect(i.run(' ')).toBe(true)
    expect(i.run('[{name:string]')).toBe(false)
    expect(i.run('[{name:string, phone:{something}]')).toBe(false)
    expect(i.run('{name:{string}, phone:{{something}}')).toBe(false)
    expect(i.run('{name}}')).toBe(false)
  })
})
