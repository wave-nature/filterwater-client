import axios from "axios";

const callAPI = (url, urlMethod, data = null, headers = null) => {
  return new Promise((resolve, reject) => {
    axios({
      url: url,
      method: urlMethod,
      data: data,
      headers: headers,
    })
      .then((response) => {
        resolve(response);
      })
      .catch((err) => reject(err.response));
  });
};

export default callAPI;
