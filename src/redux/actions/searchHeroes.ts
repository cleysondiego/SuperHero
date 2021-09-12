import { api } from '../../services/api';
import { IHero } from '../../types/IHero';
import { IMarvelApiResponse } from '../../types/IMarvelApiResponse';
import { ACTION_TYPES } from '../constants/actionTypes';
import { AppDispatch } from '../store';

export const searchHeroes = (name: string) => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch({
        type: ACTION_TYPES.HEROES.SEARCH_HEROES,
        payload: {
          name
        }
      });
      const response = await api.get<IMarvelApiResponse>('/characters', { params: { nameStartsWith: name }});

      dispatch(resultHeroes(response.data.data.results));
    } catch(error) {
      console.error(error);
    }
  }
}

export const resultHeroes = (heroes: IHero[]) => (
  {
    type: ACTION_TYPES.HEROES.RESULT_HEROES,
    payload: heroes
  }
);
