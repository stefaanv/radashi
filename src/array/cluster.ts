import { toIterable, type ToIterableItem } from 'radashi'

/**
 * Splits a single list into many lists of the desired size.
 *
 * ```ts
 * cluster([1, 2, 3, 4, 5, 6], 2)
 * // [[1, 2], [3, 4], [5, 6]]
 * ```
 */
export function cluster<T extends object>(
  array: T,
  size = 2,
): ToIterableItem<T>[][] {
  const clusters: any[][] = []
  let cluster = (clusters[0] = [] as any[])
  for (const item of toIterable(array)) {
    if (cluster.length === size) {
      clusters.push((cluster = []))
    }
    cluster.push(item)
  }
  return clusters
}
