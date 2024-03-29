import React, { useContext, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { UserContext } from "../contexts/UserContext/UseContext";

const ProtectedRoutes = () => {
  const { user, currentRoute, setCurrentRoute } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      const pathname = window.location.pathname;
      if (pathname !== "/") {
        setCurrentRoute(pathname);
      }
      navigate("/");
    }
  }, []);

  return <>{user && <Outlet />}</>;
};

export default ProtectedRoutes;
