export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";
export const SIGNUP_SUCCESS = "SIGNUP_SUCCESS";
export const SIGNUP_FAILURE = "SIGNUP_FAILURE";
export const SET_USER_AUTHENTICATED = "SET_USER_AUTHENTICATED";

export const loginSuccess = (data) => ({
  type: LOGIN_SUCCESS,
  payload: data,
});

export const loginFailure = (errorMessage) => ({
  type: LOGIN_FAILURE,
  payload: errorMessage,
});

export const signupSuccess = (data) => ({
  type: SIGNUP_SUCCESS,
  payload: data,
});

export const signupFailure = (errorMessage) => ({
  type: SIGNUP_FAILURE,
  payload: errorMessage,
});

export const setUserAuthenticated = (token) => ({
    
      type: "SET_USER_AUTHENTICATED",
      payload: token,
     
});