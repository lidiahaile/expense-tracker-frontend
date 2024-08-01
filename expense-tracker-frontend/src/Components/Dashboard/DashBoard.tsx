
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Dashboard: React.FC = () => {
    const [expenses, setExpenses] = useState<any[]>([]);

    useEffect(() => {
        const fetchExpenses = async () => {
            try {
                const token = localStorage.getItem('token');
                const response = await axios.get('/api/expenses/user/1', {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                setExpenses(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchExpenses();
    }, []);

    return (
        <div>
            <h1>Dashboard</h1>
            <ul>
                {expenses.map(expense => (
                    <li key={expense.id}>
                        {expense.vendor} - ${expense.amount}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Dashboard;
