import * as actionTypes from "../actions/types";

const initialState = {
  toggle: true,
};

const toggleReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ACTION_TOGGLE:
      return {
        ...state,
        toggle: !state.toggle,
      };
    default:
      return state;
  }
}

export default toggleReducer;