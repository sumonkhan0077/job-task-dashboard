import axios from "axios";

const axiosSecure = axios.create({
  baseURL: "https://task-api-eight-flax.vercel.app",
});


axiosSecure.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.authorization = `Bearer ${token}`;
  }
  return config;
});

export default axiosSecure;