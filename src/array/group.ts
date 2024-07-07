import { reduceIterable, type ToIterableItem } from 'radashi'

/**
 * Sorts an `array` of items into groups. The return value is a map
 * where the keys are the group IDs the given `getGroupId` function
 * produced and the value is an array of each item in that group.
 *
 * ```ts
 * group([1, 2, 3, 4], (n) => n % 2 === 0 ? 'even' : 'odd')
 * // { even: [2], odd: [1, 3, 4] }
 * ```
 */
export function group<T extends object, Key extends string | number | symbol>(
  iterable: T,
  getGroupId: (item: ToIterableItem<T>) => Key,
): { [K in Key]?: ToIterableItem<T>[] } {
  return reduceIterable(
    iterable,
    (acc, item) => {
      const groupId = getGroupId(item)
      acc[groupId] ??= []
      acc[groupId].push(item)
      return acc
    },
    {} as Record<Key, ToIterableItem<T>[]>,
  )
}
