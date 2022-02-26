import callAPI from "../api/api";
import { API_URL } from "../api/API_URL";

export const getAllUsersAction = (query, token) => {
  const headers = {
    Authorization: `Bearer ${token}`,
  };
  return {
    type: "GET_USERS",
    payload: callAPI(`${API_URL}api/users?${query}`, "GET", null, headers),
  };
};

export const getUserAction = (id, token) => {
  const headers = {
    Authorization: `Bearer ${token}`,
  };
  return {
    type: "GET_USER",
    payload: callAPI(`${API_URL}api/users/${id}`, "GET", null, headers),
  };
};
