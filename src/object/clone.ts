/**
 * Creates a shallow copy of the given obejct/value.
 * @param {*} obj value to clone @returns {*} shallow clone of the
 * given value
 */
export function clone<T extends object>(obj: T): T {
  const proto = Object.getPrototypeOf(obj)
  const newObj =
    typeof proto?.constructor === 'function'
      ? new proto.constructor()
      : Object.create(proto)

  for (const key of Object.getOwnPropertyNames(obj)) {
    newObj[key] = obj[key as keyof T]
  }

  return newObj
}
