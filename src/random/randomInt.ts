import { randomFloat } from 'radashi'

/**
 * Generates a random integer between `min` and `max`. The range is
 * inclusive on both ends, so `randomInt(0, 1)` will return 0 or 1.
 *
 * This uses `Math.random` for randomness, so it's not
 * cryptographically secure. If you need cryptographically secure
 * randomness, use `randomSecureInt` instead.
 *
 * ```ts
 * randomInt(0, 1) // 0
 * randomInt(0, 1) // 1
 * randomInt(0, 1) // 0
 * ```
 */
export function randomInt(min: number, max: number): number {
  return randomFloat(min, max + 1) | 0
}
