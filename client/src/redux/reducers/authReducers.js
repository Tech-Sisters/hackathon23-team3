import {
      LOGIN_SUCCESS,
      LOGIN_FAILURE,
      SIGNUP_SUCCESS,
      SIGNUP_FAILURE,
      SET_USER_AUTHENTICATED,
} from "../actions/authActions";

const initialState = {
      isAuthenticated: false,
      user: null,
      errorMessage: "",
      // Other properties...
};

const authReducer = (state = initialState, action) => {
switch (action.type) {
      case LOGIN_SUCCESS:
      case SIGNUP_SUCCESS:
      case SET_USER_AUTHENTICATED:
      return {
      ...state,
      user: action.payload,
      isAuthenticated: true,
      token: action.payload,      
      errorMessage: "",
      };
      case LOGIN_FAILURE:
      case SIGNUP_FAILURE:
      return {
      ...state,
      user: null,
      errorMessage: action.payload,
      };
      default:
      return state;
}
};
    
export default authReducer;
    