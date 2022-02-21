const initialState = {
  success: false,
  loading: false,
  successResponse: {},
  error: null,
};

const adminReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_USERS_PENDING":
      return {
        ...state,
        success: false,
        loading: true,
        error: null,
      };
    case "GET_USERS_FULFILLED":
      return {
        ...state,
        successResponse: action.payload.data,
        success: true,
        loading: false,
        error: null,
      };
    case "GET_USERS_REJECTED":
      return {
        ...state,
        successResponse: {},
        success: false,
        loading: false,
        error: action.payload.data,
      };

    case "GET_USER_PENDING":
      return {
        ...state,
        success: false,
        loading: true,
        error: null,
      };
    case "GET_USER_FULFILLED":
      return {
        ...state,
        successResponse: action.payload.data,
        success: true,
        loading: false,
        error: null,
      };
    case "GET_USER_REJECTED":
      return {
        ...state,
        successResponse: {},
        success: false,
        loading: false,
        error: action.payload.data,
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

export default adminReducer;
