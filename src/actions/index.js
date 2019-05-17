export const CREATE_BOOK = "CREATE_BOOK";

export const createBook = (book) => {
  return {
    type: CREATE_BOOK,
    payload: 
      book
  };
};

export const REMOVE_BOOK = "REMOVE_BOOK";

export const removeBook = (book) => {
  return {
    type: REMOVE_BOOK,
    payload:
      book
  };
};

export const CHANGE_FILTER = "CHANGE_FILTER";

export const changeFilter = (category) => {
  return {
    type: CHANGE_FILTER,
    payload: category
  };
};