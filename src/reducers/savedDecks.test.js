import { savedDecks } from './savedDecks'

describe('savedDecks', () => {
  it('should return the intial state', () => {
    const expectedResult = []
    const result = savedDecks(undefined, [])
    expect(result).toEqual(expectedResult)
  })

  it('when recieving a SAVE_DECK action, it should return an array of cards', () => {
    const sampleAction = {
      type: 'SAVE_DECK',
      deck: {name: [{card1: 1}, {card2: 2}, {card3: 3}]}
    }

    const sampleSavedDecks = [{"name": [{"card1": 1}, {"card2": 2}, {"card3": 3}]}]

    const result = savedDecks([], sampleAction);
    expect(result).toEqual(sampleSavedDecks)
  })
})