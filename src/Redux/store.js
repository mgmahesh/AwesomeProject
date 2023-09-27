import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

export default store;