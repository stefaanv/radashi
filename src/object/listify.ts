/**
 * Convert an object to a list, mapping each entry into a list item
 */
export function listify<Value, Key extends string | number | symbol, Item>(
  obj: Record<Key, Value>,
  toItem: (key: Key, value: Value) => Item,
): Item[] {
  return Object.entries(obj).reduce((acc, entry) => {
    acc.push(toItem(entry[0] as Key, entry[1] as Value))
    return acc
  }, [] as Item[])
}
