import React from "react";
import { Navigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("token") || sessionStorage.getItem("token");
  
  if (!token) {
    return <Navigate to="/login" replace />;
  }

  try {
    jwtDecode(token);
    return children;
  } catch (e) {
    localStorage.removeItem("token");
    sessionStorage.removeItem("token");
    return <Navigate to="/login" replace />;
  }
};

export default ProtectedRoute;