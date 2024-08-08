import { List } from './list'
import { Dict } from './dict'
import { StaticValue } from './value'
describe('List: ', () => {
  it('Should return empty array', () => {
    const i = new List()
    const generated = i.generate()
    expect(generated).toMatchObject([])
  })
  it('Should return array with static values', () => {
    const i = new List()
    i.add(new StaticValue('john wick'))
    i.add(new StaticValue('06062020'))
    i.add(new StaticValue('jhon'))
    i.add(new StaticValue(3355))
    i.add(new StaticValue(0))
    i.add(new StaticValue(-1))
    i.add(new StaticValue('-1'))
    i.add(new StaticValue(null))
    i.add(new StaticValue(true))
    i.add(new StaticValue(false))
    const generated = i.generate()
    const expected = [
      'john wick',
      '06062020',
      'jhon',
      3355,
      0,
      -1,
      '-1',
      null,
      true,
      false,
    ]
    expect(generated).toMatchObject(expected)
  })
  it('Should return array sub array', () => {
    const kid = new List()
    kid.add(new StaticValue(1))
    kid.add(new StaticValue(2))
    kid.add(new StaticValue(3))

    const parent = new List()
    parent.add(new StaticValue('a'))
    parent.add(new StaticValue('b'))
    parent.add(new StaticValue('c'))
    parent.add(kid)

    const generated = parent.generate()
    expect(generated).toMatchObject(['a', 'b', 'c', [1, 2, 3]])
  })
  it('Should generate array from constructor', () => {
    const parent = new List(new StaticValue('john wick'))
    expect(parent.generate()).toMatchObject(['john wick'])
  })
  it('Should generate nested arrays from constructor', () => {
    const arr3 = new List()
    arr3.add(new StaticValue(1))
    arr3.add(new StaticValue(2))
    arr3.add(new StaticValue(3))
    const arr2 = new List(arr3)
    arr2.add(new StaticValue('a'))
    arr2.add(new StaticValue('b'))
    arr2.add(new StaticValue('c'))
    const arr1 = new List(arr2)
    arr1.add(new StaticValue(true))
    arr1.add(new StaticValue(false))
    arr1.add(new StaticValue(null))
    const generated = arr1.generate()
    expect(generated).toMatchObject([
      [[1, 2, 3], 'a', 'b', 'c'],
      true,
      false,
      null,
    ])
  })
  it('Should process List from constructor', () => {
    const kid = new List()
    kid.add(new StaticValue(1))
    kid.add(new StaticValue(2))
    kid.add(new StaticValue(3))
    const parent = new List(kid)
    const generated = parent.generate()
    expect(generated).toMatchObject([[1, 2, 3]])
  })
  it('Should process Dictonary', () => {
    const dict1 = new Dict('name', new StaticValue('jhon'))
    dict1.add(new Dict('code', new StaticValue('0001')))
    const dict2 = new Dict()
    dict2.add(new Dict('name', new StaticValue('mike')))
    dict2.add(new Dict('code', new StaticValue('0002')))
    const dict3 = new Dict()
    dict3.add(new Dict('name', new StaticValue('alf')))
    dict3.add(new Dict('code', new StaticValue('0003')))
    const list = new List()
    list.add(dict1)
    list.add(dict2)
    list.add(dict3)
    const generated = list.generate()
    const expected = [
      { name: 'jhon', code: '0001' },
      { name: 'mike', code: '0002' },
      { name: 'alf', code: '0003' },
    ]
    expect(generated).toMatchObject(expected)
  })
})
