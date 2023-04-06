import React, { useContext } from "react";
import { Navigate, Outlet, Route, redirect } from 'react-router-dom'
import { AuthContext } from "./AuthContext";

const PrivateRoute = () => {
    const auth = { 'token': false };

    return (
        auth.token ? <Outlet /> : <Navigate to="/login" />
    );
};

export default PrivateRoute