import React, { useEffect, useState } from "react";
import {
  FcHome,
  FcLike,
  FcIdea,
  FcFlashOn,
  FcCalendar,
  FcSportsMode,
  FcExport,
} from "react-icons/fc";
import { FaBars, FaStream } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { startLogout } from "../../store/auth/thunks";
import defaultuser from "../../assets/defaultuser.png";
import "./sidebar.scss";

function Sidebar() {
  const NavData = [
    {
      name: "Home",
      icon: <FcHome />,
      link: "/home",
    },
    {
      name: "Favorites",
      icon: <FcLike />,
      link: "/favorites",
    },
    {
      name: "My Routines",
      icon: <FcCalendar />,
      link: "/routines",
    },
  ];

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const styles = ({ isActive }) => `link ${isActive ? "active" : " "}`;

  let { photoURL, username } = useSelector((state) => state.auth);
  const token = JSON.parse(localStorage.getItem("logged"));

  if (!token) {
    NavData.push({
      name: "Log In",
      icon: <FcIdea />,
      link: "/login",
    });
    NavData.push({
      name: "Sign Up",
      icon: <FcFlashOn />,
      link: "/register",
    });
  }

  const onLogout = () => {
    localStorage.removeItem("logged");
    dispatch(startLogout());
  };
  return (
    <div className={`${isOpen ? " " : "close"}`}>
      <div className="container">
        {isOpen ? (
          <FaStream
            className="menu"
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          />
        ) : (
          <FaBars
            className="menu"
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          />
        )}
        <div className="profile ">
          {photoURL ? (
            <img src={photoURL || defaultuser} alt="" />
          ) : (
            <FcSportsMode />
          )}

          <p>{username}</p>
        </div>

        <hr />

        <div>
          {NavData.map((data, index) => {
            return (
              <NavLink
                to={data.link}
                className={styles}
                key={++index}
                onClick={() => setIsOpen(false)}
              >
                <span className="icon">{data.icon}</span>{" "}
                <span className="name  animate__animated  animate__fadeInLeftBig">
                  {data.name}
                </span>
              </NavLink>
            );
          })}
        </div>

        {token && (
          <NavLink
            to={"/login"}
            className={styles}
            key={60}
            onClick={() => onLogout()}
          >
            <span className="icon">{<FcExport />}</span>{" "}
            <span className="name  animate__animated  animate__fadeInLeftBig">
              Logout
            </span>
          </NavLink>
        )}
      </div>
    </div>
  );
}

export default Sidebar;
