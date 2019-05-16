import {CREATE_BOOK} from "../actions";
import {REMOVE_BOOK} from "../actions";

const initialState =[
  {id: Math.random(), title: 'Adventures of Arthur Gordon Pimm', category: 'Horror'},
  {id: Math.random(), title: 'My Name is Khan', category: 'Action'}
];

export const books = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_BOOK:
      return [...state, action.payload];
    case REMOVE_BOOK:
    
      const index = state.findIndex((book)=>book.id === action.payload.id)
      console.log(action.payload);
      return [...state.slice(0, index).concat(state.slice(index+1))]
    default:
      return state;
  }
};