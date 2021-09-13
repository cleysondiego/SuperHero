import { ACTION_TYPES } from "../constants/actionTypes";

export const incrementPage = () => (
  {
    type: ACTION_TYPES.PAGES.INCREMENT_PAGE
  }
);

export const decrementPage = () => (
  {
    type: ACTION_TYPES.PAGES.DECREMENT_PAGE
  }
);