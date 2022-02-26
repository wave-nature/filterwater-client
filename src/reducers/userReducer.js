const initialState = {
  successResponse: {},
  success: false,
  loading: false,
  error: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "USER_SIGNUP_PENDING":
      return { ...state, loading: true, success: false };
    case "USER_SIGNUP_FULFILLED":
      return {
        ...state,
        loading: false,
        success: true,
        successResponse: action.payload.data,
        error: null,
      };
    case "USER_SIGNUP_REJECTED":
      return { ...state, loading: false, error: action.payload.data };
    case "USER_LOGIN_PENDING":
      return { ...state, loading: true, success: false };
    case "USER_LOGIN_FULFILLED":
      return {
        ...state,
        loading: false,
        success: true,
        successResponse: action.payload.data,
        error: null,
      };
    case "USER_LOGIN_REJECTED":
      return {
        ...state,
        loading: false,
        success: false,
        error: action.payload.data,
      };
    case "USER_LOGOUT":
      return {
        ...state,
        successResponse: {},
        success: false,
        loading: false,
        error: null,
      };

    case "GET_ME_PENDING":
      return {
        ...state,
        success: false,
        loading: true,
        error: null,
      };
    case "GET_ME_FULFILLED":
      return {
        ...state,
        successResponse: action.payload.data,
        success: true,
        loading: false,
        error: null,
      };
    case "GET_ME_REJECTED":
      return {
        ...state,
        successResponse: {},
        success: false,
        loading: false,
        error: action.payload.data,
      };

    default:
      return state;
  }
};

export default userReducer;
