import React, { useContext } from "react";
import { AuthContext } from "../components/Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user } = useContext(AuthContext);

  const location = useLocation();

  if (!user) {
    return <Navigate to={'/auth/login'} state={{from: location}}/>
}


  return children;
};

export default PrivateRoute;
