import { IHero } from '../../types/IHero';
import { ACTION_TYPES } from '../constants/actionTypes';

const initialState = {
  isSearching: false,
  heroes: [] as IHero[],
  lastSearch: ''
}

export default (state = initialState, action: any) => {
  switch (action.type) {
    case ACTION_TYPES.HEROES.SEARCH_HEROES:
      return {
        heroes: [] as IHero[],
        isLoading: true,
        lastSearch: action.payload.name
      };

    case ACTION_TYPES.HEROES.RESULT_HEROES:
      const heroesList = action.payload;

      return {
        ... state,
        isLoading: false,
        heroes: heroesList
      };

    default:
      return state;
  }
}
