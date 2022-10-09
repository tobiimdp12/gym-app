import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export const PrivateRute = ({ children }) => {
  const { status } = useSelector((state) => state.auth);
  const token = JSON.parse(localStorage.getItem("logged"));
  return token ? children : <Navigate to="/login" />;
};
