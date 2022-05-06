import callAPI from "../api/api";
import { API_URL } from "../api/API_URL";
import Cookies from "js-cookie";

const getHeaders = () => {
  const token = Cookies.get("token");

  return {
    Authorization: `Bearer ${token}`,
  };
};

export const createOrderAction = (amount) => {
  const headers = getHeaders();
  return {
    type: "CREATE_ORDER",
    payload: callAPI(
      `${API_URL}api/payments/orderId`,
      "POST",
      { amount },
      headers
    ),
  };
};

export const getMyPayments = () => {
  const headers = getHeaders();
  return {
    type: "GET_MY_PAYMENTS",
    payload: callAPI(`${API_URL}api/payments/my`, "GET", null, headers),
  };
};
export const getPayments = () => {
  const headers = getHeaders();
  return {
    type: "GET_PAYMENTS",
    payload: callAPI(`${API_URL}api/payments`, "GET", null, headers),
  };
};
