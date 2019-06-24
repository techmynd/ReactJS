import { combineReducers } from "redux";
import toggleReducer from "toggleReducer";
import counterReducer from "counterReducer";

export default combineReducers({
  toggleReducer: toggleReducer,
  counterReducer: counterReducer,
});
