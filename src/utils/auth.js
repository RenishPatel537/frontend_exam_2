import { jwtDecode } from "jwt-decode";

export const setAuth = (token, user) => {
  localStorage.setItem("token", token);
  localStorage.setItem("role", user.role);
};

export const getRole = () => {
  return localStorage.getItem("role");
};

export const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("role");
};

export const isAuthenticated = (requiredRole = null) => {
  const token = localStorage.getItem("token");

  if (!token) {
    return false;
  }

  try {
    const decode = jwtDecode(token);
    const currentTime = Date.now() / 1000;

    if (decode.exp < currentTime) {
      localStorage.removeItem("token");
      return false;
    }

    if (requiredRole && decode.role !== requiredRole) {
      return false;
    }

    return true;
  } catch (err) {
    return false;
  }
};
