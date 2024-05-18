import { BASE_API_URL } from "@/utils/constant";
import axios from "axios";
import { getCookie, hasCookie } from "cookies-next";
import toastr from "toastr";

const apiService = axios.create({
  baseURL: BASE_API_URL,
  timeout: 3000,
});

apiService.interceptors.request.use(
  (config) => {
    if (hasCookie("token"))
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
      toastr.error(error.response.data.message);
    }
    return Promise.reject(error);
  }
);
export default apiService;
