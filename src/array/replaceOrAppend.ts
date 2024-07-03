// biome-ignore lint/complexity/noBannedTypes: {} represents “all types but null/undefined”
type Defined<T> = T & ({} | null)

/**
 * Replace the first occurrence of an item in an array where the
 * `match` function returns true. If no items match, append the new
 * item to the end of the list.
 *
 * ```ts
 * replaceOrAppend([1, 2, 3], 4, (n) => n > 1)
 * // [1, 4, 3]
 *
 * replaceOrAppend([1, 2, 3], 4, (n) => n > 100)
 * // [1, 2, 3, 4]
 * ```
 */
export function replaceOrAppend<T, U>(
  array: readonly T[],
  newItem: U,
  match: (a: T, idx: number) => boolean,
): (T | Defined<U>)[] {
  if (newItem === undefined) {
    return [...array]
  }
  for (let idx = 0; idx < array.length; idx++) {
    const item = array[idx]
    if (match(item, idx)) {
      return [
        ...array.slice(0, idx),
        newItem,
        ...array.slice(idx + 1, array.length),
      ]
    }
  }
  return [...array, newItem]
}
