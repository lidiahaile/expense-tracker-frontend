
import axiosInstance from './axiosInstance';

// Types
interface User {
  id: number;
  username: string;
  password: string;
}

interface Expense {
  id: number;
  amount: number;
  vendor: string;
  dateTime: string;
  userId: number;
}

// API functions
export const registerUser = async (user: User) => {
  const response = await axiosInstance.post('/users/register', user);
  return response.data;
};

export const loginUser = async (username: string, password: string) => {
  const response = await axiosInstance.post('/login', { username, password });
  return response.data; // Assuming the response contains a JWT token
};

export const getUserExpenses = async (userId: number) => {
  const response = await axiosInstance.get(`/expenses/user/${userId}`);
  return response.data;
};

export const saveExpense = async (expense: Expense) => {
  const response = await axiosInstance.post('/expenses', expense);
  return response.data;
};
