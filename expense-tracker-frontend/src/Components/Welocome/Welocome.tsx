import React from 'react';
import { Link } from 'react-router-dom';

const Welcome: React.FC = () => {
    return (
        <div>
            <h1> Expense Tracker</h1>
            <Link to="/login"><button>Login</button></Link>
            <Link to="/register"><button>Register</button></Link>
        </div>
    );
}

export default Welcome;