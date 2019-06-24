import * as actionTypes from "../actions/types";

const initialState = {
  counter: 0,
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ACTION_INCREMENT:
      return {
        ...state,
        counter: state.counter + 1,
      };
    default:
      return state;
  }
}

export default counterReducer;