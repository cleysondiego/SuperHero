import { api } from '../../services/api'
import { IHero } from '../../types/IHero';
import { IMarvelApiResponse } from '../../types/IMarvelApiResponse';
import { ACTION_TYPES } from '../constants/actionTypes';
import { AppDispatch } from '../store';

export const loadHeroes = () => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch({ type: ACTION_TYPES.HEROES.LOAD_HEROES });
      const response = await api.get<IMarvelApiResponse>('/characters');

      dispatch(addHeroes(response.data.data.results));
    } catch(error) {
      console.error(error);
    }
  }
}

export const addHeroes = (heroes: IHero[]) => (
  {
    type: ACTION_TYPES.HEROES.ADD_HEROES,
    payload: heroes
  }
);
