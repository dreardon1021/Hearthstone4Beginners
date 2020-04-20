import { loadCards } from './loadCards'

describe('loadCards', () => {
  it('should return the intial state', () => {
    const expectedResult = []
    const result = loadCards(undefined, [])
    expect(result).toEqual(expectedResult)
  })

  it('when recieving a LOAD_CLASSIC action, it should return an array of cards', () => {
    const sampleAction = {
      type: 'LOAD_CLASSIC',
      cards: [{card1: 1}, {card2: 2}, {card3: 3}]
    }

    const sampleCards = [{card1: 1}, {card2: 2}, {card3: 3}]

    const result = loadCards([], sampleAction);
    expect(result).toEqual(sampleCards)
  })
})