import axios from "axios";
import Cookies from "js-cookie";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Request interceptor to add auth token
api.interceptors.request.use(
  (config) => {
    const accessToken = Cookies.get("accessToken");
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor to handle token refresh
// api.interceptors.response.use(
//   (response) => {
//     return response;
//   },
//   async (error) => {
//     const originalRequest = error.config;

//     // If the error is 401 and we haven't already tried to refresh
//     if (error.response?.status === 401 && !originalRequest._retry) {
//       originalRequest._retry = true;

//       try {
//         const refreshToken = Cookies.get("refreshToken");
//         if (refreshToken) {
//           // Attempt to refresh the token
//           const response = await axios.post(
//             `${process.env.NEXT_PUBLIC_API_URL}/api/tokens/refresh`,
//             { refreshToken }
//           );

//           const { accessToken } = response.data;

//           // Update cookies with new token
//           Cookies.set("accessToken", accessToken, {
//             expires: 7, // 7 days
//             path: "/",
//           });

//           // Retry the original request with new token
//           originalRequest.headers.Authorization = `Bearer ${accessToken}`;
//           return api(originalRequest);
//         }
//       } catch (refreshError) {
//         console.log("refreshError", refreshError);
//         // If refresh fails, clear cookies and redirect to login
//         Cookies.remove("accessToken", { path: "/" });
//         Cookies.remove("refreshToken", { path: "/" });
//         Cookies.remove("isAdmin", { path: "/" });

//         // Redirect to login page
//         if (typeof window !== "undefined") {
//           window.location.href = "/admin/sign-in";
//         }
//       }
//     }

//     return Promise.reject(error);
//   }
// );

export default api;
