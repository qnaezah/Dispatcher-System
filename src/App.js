// import './App.css';
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from './components/home/HomePage.js';
import LoginPage from "./components/login/Login.js";
import SignupPage from "./components/signup/SingupPage.js";
import PrivateRoute from "./context/PrivateRoute.js";

// import PrivateRoute from "./context/PrivateRoute.js";



const App = () => {

  // const RequireAuth = ({ children }) => {
  //   return currentUser ? children : <Navigate to="/login" />
  // }

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route element={<PrivateRoute />}>
            <Route path="/Home" element={<HomePage />} exact />
            <Route path="/" element={<HomePage />} exact />
          </Route>

          <Route path="/login" element={<LoginPage />} />
          <Route path="/singup" element={<SignupPage />} />
        </Routes>
      </Router>
    </div >
  )
}

export default App;
