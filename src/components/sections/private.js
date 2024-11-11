import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ element }) => {
  // Check if the user is logged in (you can enhance this check if needed)
  const isAuthenticated = localStorage.getItem("userId") !== null;

  // If not authenticated, redirect to login
  return isAuthenticated ? element : <Navigate to="/login" replace />;
};

export default PrivateRoute;
