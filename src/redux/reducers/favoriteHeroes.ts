import { IHero } from "../../types/IHero";
import { ACTION_TYPES } from "../constants/actionTypes";

const initialState = {
  favoriteHeroes: [] as IHero[],
};

export default (state = initialState, action: any) => {
  switch (action.type) {
    case ACTION_TYPES.HEROES.ADD_FAVORITE_HERO:
      const isHeroAlreadyExistsInFavorites = state.favoriteHeroes.find(hero => hero.id === action.payload.id);

      if (isHeroAlreadyExistsInFavorites) {
        return state;
      }

      const hero = action.payload;

      return {
        favoriteHeroes: [...state.favoriteHeroes, hero],
      }

    case ACTION_TYPES.HEROES.REMOVE_FAVORITE_HERO:
      const newArray = state.favoriteHeroes.filter(hero => hero.id != action.payload.id);

      return {
        favoriteHeroes: newArray
      }
    default:
      return state;
  }
}
