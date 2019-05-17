import {CREATE_BOOK, REMOVE_BOOK} from "../actions";

export const booksReducer = (state=[], action) => {
  switch (action.type) {
    case CREATE_BOOK:
      return [...state, action.payload];
    case REMOVE_BOOK:
      const index = state.findIndex(book => book.id === action.payload.id);
      return [...state.slice(0, index).concat(state.slice(index + 1))];
    default:
      return state;
  }
};