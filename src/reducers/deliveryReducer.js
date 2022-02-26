const initialState = {
  successResponse: {},
  loading: false,
  success: false,
  error: null,
};
const deliveryReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "GET_DELIVERY_PENDING":
      return { ...state, loading: true };
    case "GET_DELIVERY_FULFILLED":
      return {
        ...state,
        loading: false,
        success: true,
        successResponse: payload.data,
      };
    case "GET_DELIVERY_REJECTED":
      return { ...state, loading: false, success: false, error: payload.data };
    case "GET_USER_DELIVERY_PENDING":
      return { ...state, loading: true };
    case "GET_USER_DELIVERY_FULFILLED":
      return {
        ...state,
        loading: false,
        success: true,
        successResponse: payload.data,
      };
    case "GET_USER_DELIVERY_REJECTED":
      return { ...state, loading: false, success: false, error: payload.data };
    case "CREATE_USER_DELIVERY_PENDING":
      return { ...state, loading: true };
    case "CREATE_USER_DELIVERY_FULFILLED":
      return {
        ...state,
        loading: false,
        success: true,
        successResponse: payload.data,
      };
    case "CREATE_USER_DELIVERY_REJECTED":
      return { ...state, loading: false, success: false, error: payload.data };

    default:
      return state;
  }
};

export default deliveryReducer;
