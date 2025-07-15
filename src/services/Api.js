import axios from 'axios';

//  Dynamic base URL 
const API_URL = import.meta.env.VITE_API_URL


//  Create axios instance
const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

//  Request interceptor to attach token automatically
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

//  Optional: Response interceptor to handle auth errors globally
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (
      error.response &&
      error.response.status === 401 &&
      window.location.pathname !== '/login'
    ) {
      // Optionally clear token and redirect
      localStorage.removeItem('token');
      localStorage.removeItem('user_id');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

//  Auth APIs
export const signup = (data) => api.post('/signup', data);
export const login = (data) => api.post('/signin', data);

//  Dashboard or protected API calls
export const getDashboardData = () => api.get('/dashboard-stats');
export const getUserGrowthData = () => api.get('/user-growth');
export const getTrafficByDevice = () => api.get('/traffic-by-device');
export const getTrafficByLocation = () => api.get('/traffic-by-location');

export default api;
