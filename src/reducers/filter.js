import {CHANGE_FILTER} from "../actions";

export const filterReducer = (state = 'All', action) => {
  if (action.type === CHANGE_FILTER){
    return action.payload;
  } else {
    return state;
  }
};