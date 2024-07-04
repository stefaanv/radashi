import { lerp } from 'radashi'

declare const crypto: {
  getRandomValues: (array: Uint32Array) => Uint32Array
}

/**
 * Generates a cryptographically secure random float between `min`
 * (inclusive) and `max` (exclusive). This means `randomSecureFloat(0,
 * 1)` will never return 1.
 *
 * If no range is provided, the range is `>= 0` and `< 1`.
 *
 * This uses `crypto.getRandomValues` for randomness, so it's
 * cryptographically secure. If you're not using this for security,
 * you can use `randomFloat` instead.
 */
export function randomSecureFloat(min = 0, max = 1): number {
  const int = crypto.getRandomValues(new Uint32Array(1))[0]
  return lerp(min, max, int / 2 ** 32)
}
