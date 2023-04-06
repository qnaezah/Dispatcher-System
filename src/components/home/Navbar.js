import React from "react";
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { auth } from "../../firebase/Firebase";

function Navbar() {
  const [user, loading, error] = useAuthState(auth);

  // const navigate = useNavigate();
  // const handleLogout = () => {
  //   auth.logout();
  //   navigate('/login');

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container">
        <a className="navbar-brand" href="#">Logo</a>
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        </ul>
        <span className="navbar-text">
          <span>{user?.email}</span>

          {/* {!auth.user ? (
            <Link to='/' className="btn btn-primary m-2">Login</Link>) :
            (<button type="button" className="btn btn-primary m-2" onClick={handleLogout}>Logout</button>)} */}

        </span>
      </div>
    </nav >
  )
};

export default Navbar;