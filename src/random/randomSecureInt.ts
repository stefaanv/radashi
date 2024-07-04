import { randomSecureFloat } from 'radashi'

/**
 * Generates a cryptographically secure random integer between `min`
 * and `max`. The range is inclusive on both ends, so
 * `randomSecureInt(0, 1)` will return 0 or 1.
 *
 * This uses `crypto.getRandomValues` for randomness, so it's
 * cryptographically secure. If you're not using this for security,
 * you can use `randomInt` instead.
 */
export function randomSecureInt(min: number, max: number): number {
  return randomSecureFloat(min, max + 1) | 0
}
