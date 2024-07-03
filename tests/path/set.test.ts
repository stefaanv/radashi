import * as _ from 'radashi'

describe('set', () => {
  test('sets deep values correctly', () => {
    expect(_.set({}, 'cards.value', 2)).toEqual({
      cards: { value: 2 },
    })
    expect(_.set({}, 'cards.0.value', 2)).toEqual({
      cards: [{ value: 2 }],
    })
    expect(_.set({}, 'cards.2.value', 2)).toEqual({
      cards: [undefined, undefined, { value: 2 }],
    })
    expect(_.set({}, 'cards.0.0.value', 2)).toEqual({
      cards: [[{ value: 2 }]],
    })
    expect(_.set({}, 'cards.2.2.value', 2)).toEqual({
      cards: [undefined, undefined, [undefined, undefined, { value: 2 }]],
    })
    expect(_.set({}, 'cards.[0].[0].value', 2)).toEqual({
      cards: [[{ value: 2 }]],
    })
    expect(_.set({}, 'cards.[1].[1].value', 2)).toEqual({
      cards: [undefined, [undefined, { value: 2 }]],
    })
  })
  test('sets keys starting with numbers correctly', () => {
    expect(_.set({}, 'cards.0value', 2)).toEqual({
      cards: { '0value': 2 },
    })
    expect(_.set({}, 'cards.1234value', 2)).toEqual({
      cards: { '1234value': 2 },
    })
  })
})
