import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from "./Components/Login/Login"
import Register from "./Components/Register/Register"


const App = () => {
  return (
    <div>
        
    <Router>
           
               <Route path="/" element={"welcome the expense tracker app"}/>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                
           
        </Router>
              
    </div>
  )
}

export default App
