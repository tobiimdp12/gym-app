import React, { useEffect } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Favorites from "../Components/Favorites/Favorites";
import Routines from "../Components/Routines/Routines";
import Sidebar from "../Components/Sidebar/Sidebar";
import Footer from "../Components/Footer/Footer";
import Login from "../Components/Login/Login";
import Register from "../Components/Register/Register";
import MoreDetail from "../pages/MoreDetail/MoreDetail";
import { PrivateRute } from "./PrivateRute";
import Loader from "../utils/loader";


function RouteManager() {
  return (
    <div>
      <Sidebar />

      <Routes>
        <Route path="/*" element={<Navigate to={"/home"} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/google" element={<Loader />} />
        <Route path="/home" element={<Home />} />
        <Route path="/exercise/:id" element={<MoreDetail />} />

        <Route
          path="/favorites"
          element={
            <PrivateRute>
              <Favorites />
            </PrivateRute>
          }
        />

        <Route
          path="/routines"
          element={
            <PrivateRute>
              <Routines />
            </PrivateRute>
          }
        />
      </Routes>

      <Footer />
    </div>
  );
}

export default RouteManager;
