import * as _ from 'radashi'

describe('randomNumber', () => {
  test('basic functionality', () => {
    const result = _.randomNumber(1, 10)
    expect(result).toBeGreaterThanOrEqual(1)
    expect(result).toBeLessThan(10)
    const result2 = _.randomNumber(1, 10)
    expect(result).not.toEqual(result2)
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
