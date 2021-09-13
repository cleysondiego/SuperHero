import { combineReducers } from 'redux';

import heroes from './heroes';
import searchHeroes from './searchHeroes';
import favoriteHeroes from './favoriteHeroes';
import pages from './pages';

export default combineReducers({
  heroes,
  searchHeroes,
  favoriteHeroes,
  pages
});