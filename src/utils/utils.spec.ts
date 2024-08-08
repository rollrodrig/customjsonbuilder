import { randomString, randomNumber } from './utils'

describe('utils', () => {
  describe('randomString', () => {
    it('should return a string', () => {
      const result = randomString()
      expect(typeof result).toBe('string')
    })

    it('should start with "v"', () => {
      const result = randomString()
      expect(result.charAt(0)).toBe('v')
    })

    it('should generate unique strings', () => {
      const result1 = randomString()
      const result2 = randomString()
      expect(result1).not.toBe(result2)
    })

    it('should contain only alphanumeric characters after "v"', () => {
      const result = randomString()
      expect(result.slice(1)).toMatch(/^[a-z0-9]+$/)
    })
  })
})

describe('randomNumber', () => {
  it('should return a number', () => {
    const result = randomNumber(1, 10)
    expect(typeof result).toBe('number')
  })

  it('should return a number within the specified range', () => {
    const min = 1
    const max = 10
    const result = randomNumber(min, max)
    expect(result).toBeGreaterThanOrEqual(min)
    expect(result).toBeLessThanOrEqual(max)
  })

  it('should return an integer', () => {
    const result = randomNumber(1, 10)
    expect(Number.isInteger(result)).toBe(true)
  })

  it('should handle min and max being the same', () => {
    const result = randomNumber(5, 5)
    expect(result).toBe(5)
  })

  it('should handle negative numbers', () => {
    const result = randomNumber(-10, -1)
    expect(result).toBeGreaterThanOrEqual(-10)
    expect(result).toBeLessThanOrEqual(-1)
  })
})
