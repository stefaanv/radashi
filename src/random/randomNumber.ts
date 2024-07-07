/**
 * Generates a random float between `min` (inclusive) and `max`
 * (exclusive). This means `randomNumber(0, 1)` will never return 1.
 *
 * Note: This uses `Math.random` for randomness, so it's not
 * cryptographically secure. It's also biased (some results are more
 * likely than others). Most of the time, this won't be a problem.
 *
 * ```ts
 * randomNumber(0, 1) // 0.8887299532…
 * randomNumber(0, 10) // 5.9945732104…
 * ```
 */
export function randomNumber(min: number, max: number): number {
  return min + (max - min) * Math.random()
}
