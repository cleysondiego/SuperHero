import { ACTION_TYPES } from "../../../redux/constants/actionTypes";
import favoriteHeroes from "../../../redux/reducers/favoriteHeroes";
import { IHero } from "../../../types/IHero";

const initialState = {
  favoriteHeroes: [] as IHero[],
};

let hero: IHero;

describe('favorite heroes reducer', () => {
  beforeAll(() => {
    hero = {
      id: 1,
      description: 'Captain Test helps you test your app',
      name: 'Captain Test',
      thumbnail: {
        extension: 'jpg',
        path: 'www.url.com'
      }
    };
  });

  it('returns the initial state', () => {
    expect(favoriteHeroes(undefined, {})).toEqual(initialState);
  });

  it('add a favorite hero', () => {
    expect(favoriteHeroes(initialState, {
      type: ACTION_TYPES.HEROES.ADD_FAVORITE_HERO,
      payload: hero
    })).toEqual({
      favoriteHeroes: [hero]
    });
  });

  it('not add the same hero twice', () => {
    const state = favoriteHeroes(initialState, {
      type: ACTION_TYPES.HEROES.ADD_FAVORITE_HERO,
      payload: hero
    });

    expect(state).toEqual({
      favoriteHeroes: [hero]
    });

    expect(favoriteHeroes(state, {
      type: ACTION_TYPES.HEROES.ADD_FAVORITE_HERO,
      payload: hero
    })).toEqual({
      favoriteHeroes: [hero]
    });
  });

  it('add two different heroes', () => {
    const otherHero: IHero = {
      id: 2,
      description: 'Captain OtherTest helps you test your app',
      name: 'Captain OtherTest',
      thumbnail: {
        extension: 'jpg',
        path: 'www.url.com'
      }
    };

    const state = favoriteHeroes(initialState, {
      type: ACTION_TYPES.HEROES.ADD_FAVORITE_HERO,
      payload: hero
    });

    expect(state).toEqual({
      favoriteHeroes: [hero]
    });

    expect(favoriteHeroes(state, {
      type: ACTION_TYPES.HEROES.ADD_FAVORITE_HERO,
      payload: otherHero
    })).toEqual({
      favoriteHeroes: [hero, otherHero]
    });
  });

  it('remove a favorite hero', () => {
    const otherHero: IHero = {
      id: 2,
      description: 'Captain OtherTest helps you test your app',
      name: 'Captain OtherTest',
      thumbnail: {
        extension: 'jpg',
        path: 'www.url.com'
      }
    };

    let state = favoriteHeroes(initialState, {
      type: ACTION_TYPES.HEROES.ADD_FAVORITE_HERO,
      payload: hero
    });

    state = favoriteHeroes(state, {
      type: ACTION_TYPES.HEROES.ADD_FAVORITE_HERO,
      payload: otherHero
    });

    expect(favoriteHeroes(state, {
      type: ACTION_TYPES.HEROES.REMOVE_FAVORITE_HERO,
      payload: hero
    })).toEqual({
      favoriteHeroes: [otherHero]
    });
  });
});
