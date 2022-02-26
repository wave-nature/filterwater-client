import callAPI from "../api/api";
import { API_URL } from "../api/API_URL";

export const getMyDeliveryAction = (token) => {
  const headers = {
    Authorization: `Bearer ${token}`,
  };
  return {
    type: "GET_DELIVERY",
    payload: callAPI(
      `${API_URL}api/deliveries/myDeliveries`,
      "GET",
      null,
      headers
    ),
  };
};
export const getUserDeliveryAction = (id, token) => {
  const headers = {
    Authorization: `Bearer ${token}`,
  };
  return {
    type: "GET_USER_DELIVERY",
    payload: callAPI(`${API_URL}api/users/${id}/deliver`, "GET", null, headers),
  };
};
export const createUserDeliveryAction = (id, token, data) => {
  const headers = {
    Authorization: `Bearer ${token}`,
  };
  return {
    type: "CREATE_USER_DELIVERY",
    payload: callAPI(
      `${API_URL}api/users/${id}/deliver`,
      "POST",
      data,
      headers
    ),
  };
};
