import {CREATE_BOOK} from "../actions";
import {REMOVE_BOOK} from "../actions";

const initialState =[
  {id: Math.random(), title: 'Heyy', category: 'Nothing'},
  {id: Math.random(), title: 'Hello', category: 'World'}
];

export const books = (state = [], action) => {
  switch (action.type) {
    case CREATE_BOOK:
      return [...state, action.payload];
    case REMOVE_BOOK:
      return state.slice(0, action.payload.id - 1).concat(state.slice(action.payload.id + 1));
    default:
      return state;
  }
};