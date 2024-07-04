import * as _ from 'radashi'
import { bench } from 'vitest'

describe('randomSecureFloat', () => {
  bench('with no arguments', () => {
    _.randomSecureFloat()
  })
})

