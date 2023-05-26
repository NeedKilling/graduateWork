import { combineReducers } from "redux";

import filtres from "./filtres"
import Books from "./books"
import text from './text'
import Profile from "./profileList";

const rootReducer = combineReducers({
    filtres,
    Books,
    text,
    Profile 
})

export default rootReducer;