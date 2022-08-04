import { combineReducers } from "redux";
import BollywoodMoviesReducer from "./bollywoodReducer";
import HollywoodMoviesReducer from "./hollywoodReducer";

const rootReducer = combineReducers({
    BollywoodReducer: BollywoodMoviesReducer,
    HollywoodReducer: HollywoodMoviesReducer
})

export default rootReducer