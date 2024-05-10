import React, { useContext } from "react";
import useAdmin from "../Hooks/useAdmin";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";

const AdminRoute = ({ children }) => {
  const [isAdmin, isPending] = useAdmin();
  const { user, loading } = useContext(AuthContext);
  const loacation = useLocation();
  if (loading || isPending) {
    return "Loading ............";
  }
  if (user && isAdmin) {
    return children;
  }
  return <Navigate to="/" state={{ from: location }} replace></Navigate>;
};

export default AdminRoute;
