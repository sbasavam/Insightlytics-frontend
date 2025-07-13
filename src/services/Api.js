import axios from 'axios';

// ✅ Correct way to access Vite env variables
const API_URL =  'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// ✅ Attach JWT token (optional if you use auth headers)
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// ✅ Corrected endpoints to match your Flask backend
export const signup = (data) => api.post('/signup', data);            // /signup not /register
export const login = (data) => api.post('/login', data);
export const getDashboardData = () => api.get('/dashboard-data');     // /dashboard-data

export default api;
