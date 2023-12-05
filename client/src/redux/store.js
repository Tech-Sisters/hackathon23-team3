import { combineReducers, createStore } from "redux";
import authReducer from "../redux/reducers/authReducers"; 

const rootReducer = combineReducers({
  auth: authReducer,
});

const store = createStore(rootReducer);
export default store;
