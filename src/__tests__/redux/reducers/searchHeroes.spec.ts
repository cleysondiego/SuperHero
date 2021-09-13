import { ACTION_TYPES } from "../../../redux/constants/actionTypes";
import searchHeroes from "../../../redux/reducers/searchHeroes";
import { IHero } from "../../../types/IHero";

const initialState = {
  isSearching: false,
  heroes: [] as IHero[],
  lastSearch: ''
}

describe('search heroes reducer', () => {
  it('returns the initial state', () => {
    expect(searchHeroes(undefined, {})).toEqual(initialState);
  });

  it('handles search heroes request', () => {
    expect(searchHeroes(initialState, {
      type: ACTION_TYPES.HEROES.SEARCH_HEROES,
      payload: {
        name: 'search test'
      }
    })).toEqual({
      ...initialState,
      isSearching: true,
      lastSearch: 'search test'
    });
  });

  it('handles successful search result', () => {
    const heroesList = [
      {
        id: 1,
        description: 'Captain Test helps you test your app',
        name: 'Captain Test',
        thumbnail: {
          extension: 'jpg',
          path: 'www.url.com'
        }
      } as IHero
    ]

    expect(searchHeroes(initialState, {
      type: ACTION_TYPES.HEROES.RESULT_HEROES,
      payload: heroesList
    })).toEqual({
      ...initialState,
      heroes: heroesList
    });
  });
})
