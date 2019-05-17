import { combineReducers} from "redux";
import {filterReducer}    from "./filter";
import {booksReducer}     from "./books";

export default combineReducers({
  filter: filterReducer,
  books: booksReducer
})