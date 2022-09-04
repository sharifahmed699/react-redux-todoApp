import rootReducer from "./rootReducer";
import { createStore, applyMiddleware } from "redux"
import { composeWithDevTools } from "redux-devtools-extension";
import ThunkMiddleware from "redux-thunk";

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(ThunkMiddleware)))

export default store