import { validator } from './index'

describe('Validator', () => {
  it('Should return true for valid pattern', () => {
    const pattern = '{string:string}'
    const isValid = validator(pattern)
    expect(isValid).toBe(true)
  })
  it('Should return false for invalid pattern', () => {
    const pattern = '{string:string,}}'
    const isValid = validator(pattern)
    expect(isValid).toBe(false)
  })
})
