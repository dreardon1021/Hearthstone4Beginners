import { combineReducers } from 'redux';
import { loadCards } from './loadCards'
import { savedDecks } from './savedDecks'

const rootReducer = combineReducers({
  loadCards,
  savedDecks
})

export default rootReducer;