import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { isAuthenticated } from "../utils/auth";

function ProtectedRoute({ children, role }) {
  const isAuthenticated1 = isAuthenticated(role);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated1) navigate("/login");
  }, []);

  return children;
}

export default ProtectedRoute;
