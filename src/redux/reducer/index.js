import { combineReducers } from "redux";
import { movieReducer } from "./moviesReducer";

const rootReducer = combineReducers({
    movieReducer: movieReducer,
})

export default rootReducer