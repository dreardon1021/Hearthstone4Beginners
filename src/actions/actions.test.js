import * as actions from '../actions';

describe('Action Creators', () => {
  it('should have a type of LOAD_CLASSIC and a correct payload', () => {
    const expectedAction = {
      type: 'LOAD_CLASSIC',
      cards: [{cardID: 1}]
    }

    const result = actions.loadClassicCards([{cardID: 1}])
    expect(result).toEqual(expectedAction)
  })

  it('should have a type of SAVE_DECK and a correct payload', () => {
    const expectedAction = {
      type: 'SAVE_DECK',
      deck: {deck: 1}
    }

    const result = actions.saveDeck({deck: 1})
    expect(result).toEqual(expectedAction)
  })
})