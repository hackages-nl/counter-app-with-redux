import {ADD_TODO} from "./action";

export function counterReducer(count = 0, action) {
  if (action.type === "INCREMENT") {
    return count + action.payload;
  }
  if (action.type === "DECREMENT") {
    return count - action.payload;
  }
  return count;
}

export function stepReducer(step = 1, action) {
  if (action.type === "STEP_CHANGED") {
    return action.payload;
  }
  return step;
}

export function todosReducer(todos = ["Learn React"], action) {
  if (action.type === ADD_TODO) {
    return [...todos, action.payload];
  }
  return todos;
}
