import { createStore } from "redux";

const store = createStore((state = { count: 0 }, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        count: state.count + 1,
      };

    case "DECREMENT":
      return {
        count: state.count - 1,
      };

    case "RESET":
      return {
        count: 0,
      };
  }
  return state;
});
console.log(store.getState());

store.dispatch({
  type: "INCREMENT",
});
store.dispatch({
  type: "RESET",
});
store.dispatch({
  type: "DECREMENT",
});
store.dispatch({
  type: "DECREMENT",
});
store.dispatch({
  type: "DECREMENT",
});
store.dispatch({
  type: "INCREMENT",
});

console.log(store.getState());
