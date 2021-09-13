import { ACTION_TYPES } from "../../../redux/constants/actionTypes";
import heroes from "../../../redux/reducers/heroes";
import { IHero } from "../../../types/IHero";

const initialState = {
  isLoading: false,
  heroes: [] as IHero[],
  hasError: false,
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
    expect(heroes(undefined, {})).toEqual(initialState);
  });

  it('load heroes request', () => {
    expect(heroes(initialState, {
      type: ACTION_TYPES.HEROES.LOAD_HEROES,
    })).toEqual({
      ...initialState,
      isLoading: true,
      hasError: false
    });
  });

  it('not load heroes request when has heroes', () => {
    let newState = {
      ...initialState,
      heroes: [hero]
    }
    expect(heroes(newState, {
      type: ACTION_TYPES.HEROES.LOAD_HEROES,
    })).toEqual({
      ...newState,
      isLoading: false
    });
  });

  it('add heroes request', () => {
    let newState = heroes(initialState, {
      type: ACTION_TYPES.HEROES.LOAD_HEROES
    });

    expect(heroes(newState, {
      type: ACTION_TYPES.HEROES.ADD_HEROES,
      payload: [hero],
    })).toEqual({
      isLoading: false,
      hasError: false,
      heroes: [hero]
    });
  });

  it('load heroes error', () => {
    expect(heroes(initialState, {
      type: ACTION_TYPES.HEROES.LOAD_HEROES_ERROR
    })).toEqual({
      ...initialState,
      hasError: true
    });
  });

  it('if loads heroes error then change loading to false', () => {
    let newState = heroes(initialState, {
      type: ACTION_TYPES.HEROES.LOAD_HEROES
    });

    expect(newState).toEqual({
      ...newState,
      isLoading: true,
      hasError: false,
    });

    expect(heroes(newState, {
      type: ACTION_TYPES.HEROES.LOAD_HEROES_ERROR
    })).toEqual({
      ...newState,
      hasError: true,
      isLoading: false,
    });
  });
});
