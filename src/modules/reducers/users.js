const dummyUser = {
  isLoggedIn: false,
  token: "",
  user: null
};

export const initialState = {
  isLoggedIn: false,
  user: null,
  token: ""
};

export const SIGN_UP = "SIGN_UP";
export const LOG_IN_REQUEST = "LOG_IN_REQUEST"; // 액션의 이름
export const LOG_IN_SUCCESS = "LOG_IN_SUCCESS";
export const LOG_IN_FAILURE = "LOG_IN_FAILURE";
export const LOG_OUT = "LOG_OUT";

export const signUpAction = data => {
  return {
    type: SIGN_UP,
    data: data
  };
};
export const loginAction = data => {
  return {
    type: LOG_IN_REQUEST,
    data: data
  };
};

export const logoutAction = {
  type: LOG_OUT
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOG_IN_REQUEST: {
      return {
        ...state,
        token: action.payload
      };
    }
    case LOG_IN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        user: action.payload
      };
    case LOG_OUT: {
      return {
        ...state,
        isLoggedIn: false,
        user: null
      };
    }
    case SIGN_UP: {
      return {
        ...state,
        signUpData: action.data
      };
    }
    default: {
      return {
        ...state
      };
    }
  }
};

export default reducer;
