import { iterate, randomInt } from 'radashi'

export function uid(length: number, specials = ''): string {
  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789' + specials
  return iterate(
    length,
    acc => {
      return acc + characters.charAt(randomInt(0, characters.length - 1))
    },
    '',
  )
}
