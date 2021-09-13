import { ACTION_TYPES } from "../../../redux/constants/actionTypes";
import pages from "../../../redux/reducers/pages";

const initialState = {
  previousPage: 0,
  currentPage: 0,
  nextPage: 20
};

describe('pages reducer', () => {
  it('returns the initial state', () => {
    expect(pages(undefined, {})).toEqual(initialState);
  });

  it('increment page', () => {
    expect(pages(initialState, {
      type: ACTION_TYPES.PAGES.INCREMENT_PAGE
    })).toEqual({
      previousPage: 0,
      currentPage: 20,
      nextPage: 40
    });
  });

  it('decrement page', () => {
    const newState = pages(initialState, {
      type: ACTION_TYPES.PAGES.INCREMENT_PAGE
    });

    expect(pages(newState, {
      type: ACTION_TYPES.PAGES.DECREMENT_PAGE
    })).toEqual({
      previousPage: 0,
      currentPage: 0,
      nextPage: 20
    });
  });

  it('increment page twice', () => {
    let newState = pages(initialState, {
      type: ACTION_TYPES.PAGES.INCREMENT_PAGE
    });

     expect(pages(newState, {
      type: ACTION_TYPES.PAGES.INCREMENT_PAGE
    })).toEqual({
      previousPage: 20,
      currentPage: 40,
      nextPage: 60
    });
  });

  it('not decrement under zero', () => {
    expect(pages(initialState, {
      type: ACTION_TYPES.PAGES.DECREMENT_PAGE
    })).toEqual(initialState);
  });
});
