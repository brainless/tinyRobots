import axios from "axios";

const api = axios.create({
  baseURL: process.env.API_BASE_URL || "http://localhost:8000",
  withCredentials: false,
  headers: {
    "Content-Type": "application/json",
  },
});

const token = localStorage.getItem("accessToken");
if (!!token) {
  api.defaults.headers.common["authorization"] = `Bearer ${token}`;
}

api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (
      error.response &&
      (error.response.status === 401 || error.response.status === 422)
    ) {
      localStorage.removeItem("accessToken");
      const location = new Location();
      location.href = "/login";
      window.location = location;
    }
    return Promise.reject(error);
  }
);

export default api;
