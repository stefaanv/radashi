/**
 * Formats the given string in pascal case fashion
 *
 * pascal('hello world') -> 'HelloWorld' pascal('va va boom') ->
 * 'VaVaBoom'
 */
export function pascal(str: string): string {
  const parts = str.split(/[\.\-\s_]/).map(x => x.toLowerCase())
  return parts.map(str => str.charAt(0).toUpperCase() + str.slice(1)).join('')
}
