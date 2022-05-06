import bottleImage from "../assets/bottle.jpg";

const initialState = {
  sucess: false,
  loading: false,
  successResponse: {},
  error: null,
};

const paymentReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case "CREATE_ORDER_PENDING":
      return {
        ...state,
        sucess: false,
        loading: true,
        successResponse: {},
        error: null,
      };
    case "CREATE_ORDER_FULFILLED":
      return {
        ...state,
        sucess: true,
        loading: false,
        successResponse: payload.data,
        error: null,
      };
    case "CREATE_ORDER_REJECTED":
      return {
        ...state,
        sucess: false,
        loading: false,
        successResponse: {},
        error: payload.data,
      };
    case "GET_MY_PAYMENTS_PENDING":
      return {
        ...state,
        sucess: false,
        loading: true,
        successResponse: {},
        error: null,
      };
    case "GET_MY_PAYMENTS_FULFILLED":
      return {
        ...state,
        sucess: true,
        loading: false,
        successResponse: payload.data,
        error: null,
      };
    case "GET_MY_PAYMENTS_REJECTED":
      return {
        ...state,
        sucess: false,
        loading: false,
        successResponse: {},
        error: payload.data,
      };
    case "GET_PAYMENTS_PENDING":
      return {
        ...state,
        sucess: false,
        loading: true,
        successResponse: {},
        error: null,
      };
    case "GET_PAYMENTS_FULFILLED":
      return {
        ...state,
        sucess: true,
        loading: false,
        successResponse: payload.data,
        error: null,
      };
    case "GET_PAYMENTS_REJECTED":
      return {
        ...state,
        sucess: false,
        loading: false,
        successResponse: {},
        error: payload.data,
      };
    default:
      return state;
  }
};

export default paymentReducer;
