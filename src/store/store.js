import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";
import userReducer from "../reducers/userReducer";
import adminReducer from "../reducers/adminReducer";
import deliveryReducer from "../reducers/deliveryReducer";
import queryReducer from "../reducers/queryReducer";
import paymentReducer from "../reducers/paymentReducer";

const reducers = combineReducers({
  user: userReducer,
  admin: adminReducer,
  delivery: deliveryReducer,
  query: queryReducer,
  payment: paymentReducer,
});

const middleware = [thunk, promise];

// const userFromLocalStorage = localStorage.getItem("user")
//   ? JSON.parse(localStorage.getItem("user"))
//   : null;

// const initialState = {
//   user: { user: userFromLocalStorage }, //userLogin is the name of state used in reducer in store and inside that userLogin state we have user
//   // user: userFromLocalStorage,
// };

const store = createStore(
  reducers,
  // initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
