
import React, { useState } from 'react';
import axios from 'axios';

const AddExpense: React.FC = () => {
    const [amount, setAmount] = useState<number>(0);
    const [vendor, setVendor] = useState<string>('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const token = localStorage.getItem('token');
            await axios.post('/api/expenses', {
                amount,
                vendor,
                dateTime: new Date().toISOString(),
                user: { id: 1 }
            }, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(Number(e.target.value))}
                placeholder="Amount"
            />
            <input
                type="text"
                value={vendor}
                onChange={(e) => setVendor(e.target.value)}
                placeholder="Vendor"
            />
            <button type="submit">Add Expense</button>
        </form>
    );
};

export default AddExpense;
