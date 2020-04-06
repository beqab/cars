import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { testReducer } from "./redux/test/testReducer";

import thunk from "redux-thunk";

const rootReducer = combineReducers({
  test: testReducer,
});

export function initializeStore(initialState = {}) {
  return createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunk))
  );
}
