import * as _ from 'radashi'

describe('randomNumber', () => {
  test('basic functionality', () => {
    const numbers = _.list(0, 1000, () => _.randomNumber(0, 1))
    expect(numbers.every(n => n >= 0 && n < 1)).toBe(true)
  })
  test('should handle negative numbers', () => {
    const result = _.randomNumber(-10, -1)
    expect(result).toBeGreaterThanOrEqual(-10)
    expect(result).toBeLessThanOrEqual(-1)
  })
  test('should handle zero', () => {
    const result = _.randomNumber(0, 0)
    expect(result).toBe(0)
  })
  test('should handle non-integer numbers', () => {
    const result = _.randomNumber(0.5, 0.6)
    expect(result).toBeGreaterThanOrEqual(0.5)
    expect(result).toBeLessThan(0.6)
  })
  test('should handle a flipped range', () => {
    const result = _.randomNumber(10, 1)
    expect(result).toBeGreaterThanOrEqual(1)
    expect(result).toBeLessThan(10)
  })
})
