import { combineReducers } from 'redux';

import heroes from './heroes';
import searchHeroes from './searchHeroes';

export default combineReducers({
  heroes,
  searchHeroes
});