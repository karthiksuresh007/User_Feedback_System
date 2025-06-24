// src/components/ProtectedRoute.jsx
import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const isLoggedIn = localStorage.getItem('isLoggedIn');

  return isLoggedIn === 'true' ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
