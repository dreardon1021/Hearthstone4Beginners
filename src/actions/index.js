export const loadClassicCards = cards => ({
  type: 'LOAD_CLASSIC',
  cards
})

export const saveDeck = (deck, name) => ({
  type: 'SAVE_DECK',
  deck
})