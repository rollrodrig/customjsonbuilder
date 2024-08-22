import { cleaner } from './index'

describe('Cleaner', () => {
  it('Should remove all whitespace', () => {
    const pattern = '  {  string: string,  }  '
    const cleaned = cleaner(pattern)
    expect(cleaned).toBe('{string:string}')
  })
  it('Should remove all whitespace', () => {
    const pattern = `
    {  string:
      string,  }
    `
    const cleaned = cleaner(pattern)
    expect(cleaned).toBe('{string:string}')
  })
})
