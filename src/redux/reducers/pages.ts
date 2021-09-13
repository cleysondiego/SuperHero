import { ACTION_TYPES } from "../constants/actionTypes";

const initialState = {
  previousPage: 0,
  currentPage: 0,
  nextPage: 20
};

export default (state = initialState, action: any) => {
  switch (action.type) {
    case ACTION_TYPES.PAGES.INCREMENT_PAGE:
      return {
        previousPage: state.currentPage,
        currentPage: state.currentPage + 20,
        nextPage: state.nextPage + 20,
      };

    case ACTION_TYPES.PAGES.DECREMENT_PAGE:
      const previous = state.previousPage - 20 > 0 ? state.previousPage - 20 : 0;
      const current = state.currentPage - 20 >= 0 ? state.currentPage - 20 : 0;
      const next = state.nextPage - 20 >= 20 ? state.nextPage - 20 : 20;

      return {
        previousPage: previous,
        currentPage: current,
        nextPage: next
      }

    default:
      return state;
  }
}
