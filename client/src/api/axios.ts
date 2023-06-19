import axios from "axios";

export const BASE_URL = "http://api:5000";

export default axios.create({
  baseURL: BASE_URL,
  headers: { "Content-Type": "application/json" },
  withCredentials: true,
})
