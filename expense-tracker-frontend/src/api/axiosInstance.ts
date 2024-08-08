
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http:://localhost:3306/expense_tracker', 
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;
