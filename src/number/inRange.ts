/**
 * Checks if the given number is between zero (0) and the ending
 * number. 0 is inclusive.
 *
 * * Numbers can be negative or positive.
 * * Ending number is exclusive.
 *
 * ```ts
 * inRange(0, 10) // true
 * inRange(1, 10) // true
 * inRange(10, 10) // false
 * inRange(-1, 10) // false
 * ```
 */
export function inRange(number: number, end: number): boolean

/**
 * Checks if the given number is between two numbers.
 *
 * * Numbers can be negative or positive.
 * * Starting number is inclusive.
 * * Ending number is exclusive.
 * * The start and the end of the range can be ascending OR descending
 *   order.
 *
 * ```ts
 * inRange(5, 0, 10) // true
 * inRange(10, 0, 10) // false
 * inRange(10, 10, 20) // true
 * inRange(20, 0, 10) // false
 * ```
 */
export function inRange(number: number, start: number, end: number): boolean

export function inRange(number: number, start: number, end = 0): boolean {
  return number >= Math.min(start, end) && number < Math.max(start, end)
}
