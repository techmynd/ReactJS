// increment or decrement age via redux

// get redux
const { createStore } = require("redux");

// state init
const initialState = {
  age: 21,
};

// reducer
const myReducer = (state = initialState, action) => {
  // copy of state // state is an object not array
  const newState = { ...state };
  if (action.type === "ADD") {
    newState.age += 1;
  }

  // payload
  /*
  if (action.type === "ADD") {
    newState.age += action.val;
  }
  */

  if (action.type === "SUBTRACT") {
    newState.age -= 1;
  }
  return newState;
};

// store with reducer in it
const store = createStore(myReducer);

// result
store.subscribe(() => {
  console.log("state changed " + JSON.stringify(store.getState()));
});

// actions
// store is dispatching an action that has type add

// payload
// store.dispatch({ type: "ADD", val: 10 });

store.dispatch({ type: "ADD" });
store.dispatch({ type: "ADD" });
store.dispatch({ type: "ADD" });
store.dispatch({ type: "SUBTRACT" });
store.dispatch({ type: "SUBTRACT" });
store.dispatch({ type: "SUBTRACT" });

// results
// console.log(store.getState());
