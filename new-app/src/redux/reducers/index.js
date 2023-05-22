import { combineReducers } from "redux";

import filtresReducers from "./filtres"
import BooksReducers from "./books"
import TextReducers from './text'

const rootReducer = combineReducers({
    filtres : filtresReducers,
    Books : BooksReducers,
    text : TextReducers,
})

export default rootReducer;