export const loadCards = (state = [], action) => {
  switch (action.type) {
    case 'LOAD_CLASSIC':
      return [...state, ...action.cards];
    default:
      return state;
  }
}