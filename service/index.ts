import { BASE_API_URL } from "@/utils/constant";
import axios from "axios";

const service = axios.create({
  baseURL: BASE_API_URL,
  timeout: 3000,
});

export default service;
