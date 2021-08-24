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
