import callAPI from "../api/api";
import { API_URL } from "../api/API_URL";
export const userSignupAction = (data) => {
  return {
    type: "USER_SIGNUP",
    payload: callAPI(`${API_URL}api/users/signup`, "POST", data),
  };
};

export const userLoginAction = (data) => ({
  type: "USER_LOGIN",
  payload: callAPI(`${API_URL}api/users/login`, "POST", data),
});

export const userLogoutActon = () => ({
  type: "USER_LOGOUT",
});
