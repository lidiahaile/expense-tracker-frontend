import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from "./Components/Login/Login"
import Register from "./Components/Register/Register"
import Dashboard from './Components/Dashboard/DashBoard';

import Welcome from './Components/Welocome/Welocome';


const App = () => {
  return (
    <div>
        
       <Router>
            <Routes>
                <Route path="/" element={<Welcome />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
        </Router>
              
    </div>
  )
}

export default App
