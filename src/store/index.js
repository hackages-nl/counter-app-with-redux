import {createStore, compose, applyMiddleware, combineReducers} from "redux";
import {counterReducer, stepReducer, todosReducer} from "./reducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducers = combineReducers({
  count: counterReducer,
  step: stepReducer,
  todos: todosReducer,
});

export const store = createStore(reducers, composeEnhancers(applyMiddleware()));
