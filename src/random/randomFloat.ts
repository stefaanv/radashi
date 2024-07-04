/**
 * Generates a random float between `min` (inclusive) and `max`
 * (exclusive). This means `randomFloat(0, 1)` will never return 1.
 *
 * If no range is provided, the range is `>= 0` and `< 1`.
 *
 * This uses `Math.random` for randomness, so it's not
 * cryptographically secure. If you need cryptographically secure
 * randomness, use `randomSecureFloat` instead.
 *
 * ```ts
 * randomFloat() // 0.5121733589…
 * randomFloat(0, 1) // 0.8887299532…
 * randomFloat(0, 10) // 5.9945732104…
 * ```
 */
export function randomFloat(): number
export function randomFloat(min: number, max: number): number
export function randomFloat(min = 0, max = 1): number {
  return min + (max - min) * Math.random()
}
