import { combineReducers } from "redux";

import filtresReducers from "./filtres"
import BooksReducers from "./books"

const rootReducer = combineReducers({
    filtres : filtresReducers,
    Books : BooksReducers
})

export default rootReducer;