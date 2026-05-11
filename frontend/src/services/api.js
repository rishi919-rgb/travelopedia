import axios from 'axios';

// Create a centralized Axios instance
const api = axios.create({
  baseURL: '/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request Interceptor: Attach JWT token to all requests
api.interceptors.request.use(
  (config) => {
    // Get user from localStorage
    const userStr = localStorage.getItem('user');
    if (userStr) {
      const user = JSON.parse(userStr);
      if (user && user.token) {
        config.headers.Authorization = `Bearer ${user.token}`;
      }
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response Interceptor: Handle global API errors (e.g., 401 Unauthorized)
api.interceptors.response.use(
  (response) => response,
  (error) => {
    // If the token is invalid or expired, we might want to trigger a logout
    if (error.response && error.response.status === 401) {
      console.warn('Unauthorized access - Token might be invalid or expired.');
      // Optional: Dispatch a global logout action here if Redux is injected, 
      // or clear local storage. For now, we reject the promise cleanly.
    }
    return Promise.reject(error);
  }
);

export default api;
