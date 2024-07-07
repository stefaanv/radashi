import { toIterable, type ToIterableItem } from 'radashi'

/**
 * Select performs a find + map operation, short-circuiting on the first
 * element that satisfies the prescribed condition. If condition is omitted,
 * will select the first mapped value which is non-nullish.
 *
 * ```ts
 * selectFirst(
 *   [1, 2, 3, 4],
 *   x => x * x,
 *   x => x > 2
 * )
 * // => 9
 * ```
 */
export function selectFirst<T extends object, U>(
  iterable: T,
  mapper: (item: ToIterableItem<T>, index: number) => U,
  condition?: (item: ToIterableItem<T>, index: number) => boolean,
): U | undefined {
  if (!iterable) {
    return undefined
  }
  let index = 0
  for (const item of toIterable(iterable)) {
    if (!condition) {
      const result = mapper(item, index)
      if (result != null) {
        return result
      }
    } else if (condition(item, index)) {
      return mapper(item, index)
    }
    index++
  }
}
