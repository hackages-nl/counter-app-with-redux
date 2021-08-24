export function reducer(state = 0, action) {
  if (action.type === "INCREMENT") {
    return state + action.payload;
  }
  if (action.type === "DECREMENT") {
    return state - action.payload;
  }
  return state;
}
