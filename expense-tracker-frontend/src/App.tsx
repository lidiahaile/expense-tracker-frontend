import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from "./Components/Login/Login"
import Register from "./Components/Register/Register"


const App = () => {
  return (
    <div>
        
    <Router>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                
            </Routes>
        </Router>
              
    </div>
  )
}

export default App
