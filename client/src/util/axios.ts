import axios from "axios";
import Router from "next/router";

const api = axios.create({
  baseURL: "http://localhost:5000/api/",
  timeout: 5000, // safer timeout
});

// ✅ Request Interceptor
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");

    if (token) {
      config.headers = config.headers || {};
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

// ✅ Response Interceptor
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem("token");
      Router.replace("/login");
    }
    return Promise.reject(error);
  }
);

export default api;
