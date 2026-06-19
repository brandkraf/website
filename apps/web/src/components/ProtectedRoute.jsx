import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext.jsx';

const ProtectedRoute = () => {
  const { isAuthenticated, loading } = useAuth();

  // Wait for the async session restore before deciding — avoids bouncing a
  // logged-in admin to the login page on refresh.
  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-brandkraf-teal/20 border-t-brandkraf-teal" />
      </div>
    );
  }

  if (!isAuthenticated) {
    return <Navigate to="/admin-login" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
