import { BASE_API_URL } from "@/utils/constant";
import axios from "axios";
import { getCookie } from "cookies-next";

const apiService = axios.create({
  baseURL: BASE_API_URL,
  timeout: 3000,
});

apiService.interceptors.request.use(
  (config) => {
    config.headers["Authorization"] = `${getCookie("token")}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

apiService.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    const status = error.response.status;
    if (status >= 400 && status <= 500) {
      alert(error.response.data.message);
    }
    return Promise.reject(error);
  }
);
export default apiService;
