import axios from "axios";

const API_URL = "http://localhost:8000";

const api = axios.create({
  baseURL: API_URL,
});

api.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem("accessToken");

    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }

    return config;
  },

  (err) => Promise.reject(err),
);

api.interceptors.response.use(
  (res) => res,

  (err) => {
    if (err.response?.status === 401) {
      console.error("Unauthorized");
    }

    if (err.response?.status === 500) {
      console.error("Internal Server Error");
    }

    return Promise.reject(err);
  },
);

export default api;
