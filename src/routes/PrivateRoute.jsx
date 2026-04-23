import React, { useContext } from "react";
import { AuthContext } from "../components/Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import Loading from "../components/pages/Loading";

const PrivateRoute = ({ children }) => {
  const { user, authLoading } = useContext(AuthContext);

  const location = useLocation();

  if(authLoading){
    return <Loading></Loading>;
  }

  if (!user) {
    return <Navigate to={'/auth/login'} state={{from: location}}/>
}


  return children;
};

export default PrivateRoute;
