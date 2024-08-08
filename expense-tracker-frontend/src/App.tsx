import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from "./Components/Login/Login"
import Register from "./Components/Register/Register"
import Dashboard from './Components/Dashboard/DashBoard';
import Welcome from './Components/Welcome/Welcome';
import { AuthProvider, useAuth } from './Context/AuthContext';


const App: React.FC = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<ProtectedRoute component={<Dashboard />} />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

const ProtectedRoute: React.FC<{ component: React.ReactNode }> = ({ component }) => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? component : <Navigate to="/login" />;
};

export default App;