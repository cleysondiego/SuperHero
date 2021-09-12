import { IHero } from '../../types/IHero';
import { ACTION_TYPES } from '../constants/actionTypes';

const initialState = {
  isLoading: false,
  heroes: [] as IHero[],
  hasError: false,
};

export default (state = initialState, action: any) => {
  switch (action.type) {
    case ACTION_TYPES.HEROES.LOAD_HEROES:
      if (state.heroes.length != 0) {
        return {
          ...state,
          isLoading: false,
        };
      }

      return {
        ...state,
        isLoading: true
      };

    case ACTION_TYPES.HEROES.ADD_HEROES:
      const heroesList = action.payload;

      return {
        isLoading: false,
        heroes: heroesList,
        hasError: false,
      };

      case ACTION_TYPES.HEROES.LOAD_HEROES_ERROR:
        return {
          ...state,
          isLoading: false,
          hasError: true,
        };

    default:
      return state;
  }
}
