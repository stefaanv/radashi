import * as _ from 'radashi'
import { bench } from 'vitest'

describe('randomNumber', () => {
  bench('with no arguments', () => {
    _.randomNumber()
  })
})
