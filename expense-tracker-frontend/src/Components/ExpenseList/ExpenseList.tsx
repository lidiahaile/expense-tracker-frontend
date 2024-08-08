// src/components/ExpenseList.tsx
import React, { useEffect, useState } from 'react';
import { getUserExpenses } from '../../api/api';


interface Expense {
  id: number;
  amount: number;
  vendor: string;
  dateTime: string;
}

const ExpenseList: React.FC = () => {
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const userId = 1; // Fetch this from authenticated user info

  useEffect(() => {
    const fetchExpenses = async () => {
      try {
        const data = await getUserExpenses(userId);
        setExpenses(data);
      } catch (error) {
        console.error('Failed to fetch expenses', error);
      }
    };
    fetchExpenses();
  }, [userId]);

  return (
    <div>
      <h2>Expenses</h2>
      <ul>
        {expenses.map(expense => (
          <li key={expense.id}>
            {expense.vendor}: {expense.amount} on {new Date(expense.dateTime).toLocaleDateString()}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExpenseList;

