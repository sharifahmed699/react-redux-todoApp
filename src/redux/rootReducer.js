import filterReducer from "./filter/reducer";
import todoReducer from "./todos/reducer";
import { combineReducers } from "redux"


const rootReducer = combineReducers({
    todos: todoReducer,
    filter: filterReducer
})

export default rootReducer