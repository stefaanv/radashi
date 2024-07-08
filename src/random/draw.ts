import { randomInt } from 'radashi'

/**
 * Draw a random item from a list. Returns null if the list is empty
 */
export function draw<T>(array: readonly T[]): T | null {
  const max = array.length
  if (max === 0) {
    return null
  }
  const index = randomInt(0, max - 1)
  return array[index]
}
