const initialState = {
  success: false,
  error: {},
  loading: false,
  succesResponse: {},
};

const queryReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "CREATE_QUERY_PENDING":
      return {
        ...state,
        loading: true,
        success: false,
      };
    case "CREATE_QUERY_FULFILLED":
      return {
        ...state,
        loading: false,
        success: true,
        succesResponse: payload.data,
      };
    case "CREATE_QUERY_REJECTED":
      return {
        ...state,
        loading: false,
        success: false,
        succesResponse: {},
        error: payload.data,
      };
    case "GET_QUERIES_PENDING":
      return {
        ...state,
        loading: true,
        success: false,
      };
    case "GET_QUERIES_FULFILLED":
      return {
        ...state,
        loading: false,
        success: true,
        succesResponse: payload.data,
      };
    case "GET_QUERIES_REJECTED":
      return {
        ...state,
        loading: false,
        success: false,
        succesResponse: {},
        error: payload.data,
      };

    case "UPDATE_QUERY_PENDING":
      return {
        ...state,
        loading: true,
        success: false,
        succesResponse: {},
        error: null,
      };
    case "UPDATE_QUERY_FULFILLED":
      return {
        ...state,
        loading: false,
        success: true,
        succesResponse: payload.data,
        error: null,
      };
    case "UPDATE_QUERY_REJECTED":
      return {
        ...state,
        loading: false,
        success: false,
        succesResponse: {},
        error: payload.data,
      };

    case "DELETE_QUERY_PENDING":
      return {
        ...state,
        loading: true,
        success: false,
        succesResponse: {},
        error: null,
      };
    case "DELETE_QUERY_FULFILLED":
      return {
        ...state,
        loading: false,
        success: true,
        succesResponse: payload.data,
        error: null,
      };
    case "DELETE_QUERY_REJECTED":
      return {
        ...state,
        loading: false,
        success: false,
        succesResponse: {},
        error: payload.data,
      };

    case "MY_QUERIES_PENDING":
      return {
        ...state,
        loading: true,
        success: false,
        succesResponse: {},
        error: null,
      };
    case "MY_QUERIES_FULFILLED":
      return {
        ...state,
        loading: false,
        success: true,
        succesResponse: payload.data,
        error: null,
      };
    case "MY_QUERIES_REJECTED":
      return {
        ...state,
        loading: false,
        success: false,
        succesResponse: {},
        error: payload.data,
      };

    default:
      return state;
  }
};

export default queryReducer;
