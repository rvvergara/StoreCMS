import {CHANGE_FILTER} from "../actions";

export const filterReducer = (state = 'All', action) => {
  if (action.type === CHANGE_FILTER){
    console.log('act', action);
    return action.payload;
  } else {
    return state;
  }
};