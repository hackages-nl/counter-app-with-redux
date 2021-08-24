export const incrementAction = (payload) => {
  return {type: "INCREMENT", payload};
};

export const decrementAction = (payload) => {
  return {
    type: "DECREMENT",
    payload,
  };
};

export const updateStepAction = (payload) => {
  return {
    type: "STEP_CHANGED",
    payload,
  };
};

export const ADD_TODO = "ADD todo";
export const addTodoAction = (payload) => {
  return {
    type: ADD_TODO,
    payload,
  };
};
