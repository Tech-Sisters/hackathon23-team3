// rootReducer.js

import { combineReducers } from "redux";
import authReducer from "../reducers/authReducers";
// ... other reducers for movie and book reviews

const rootReducer = combineReducers({
  auth: authReducer,
  // ... other reducers
});

export default rootReducer;
