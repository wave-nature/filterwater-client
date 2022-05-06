import callAPI from "../api/api";
import { API_URL } from "../api/API_URL";

const getHeaders = (token) => ({
  Authorization: `Bearer ${token}`,
});

export const createQueryAction = (data, token) => {
  const headers = getHeaders(token);

  return {
    type: "CREATE_QUERY",
    payload: callAPI(`${API_URL}api/queries`, "POST", data, headers),
  };
};

export const getAllQueriesAction = (token) => {
  const headers = getHeaders(token);

  return {
    type: "GET_QUERIES",
    payload: callAPI(`${API_URL}api/queries`, "GET", null, headers),
  };
};

export const updateQueryAction = (id, token) => {
  const headers = getHeaders(token);

  return {
    type: "UPDATE_QUERY",
    payload: callAPI(
      `${API_URL}api/queries/${id}`,
      "PATCH",
      { solved: true },
      headers
    ),
  };
};
export const deleteQueryAction = (id, token) => {
  const headers = getHeaders(token);

  return {
    type: "DELETE_QUERY",
    payload: callAPI(`${API_URL}api/queries/${id}`, "DELETE", null, headers),
  };
};

export const myQueriesAction = (token) => {
  const headers = getHeaders(token);

  return {
    type: "MY_QUERIES",
    payload: callAPI(`${API_URL}api/queries/myQueries`, "GET", null, headers),
  };
};
