import React, { useState } from "react";
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

//TODO fijarme lo del boton de logout
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

  const { status, username, photoURL } = useSelector((state) => state.auth);

  if (status !== "authenticated") {
    NavData.push({
      name: "Login",
      icon: <FcIdea />,
      link: "/login",
    });
    NavData.push({
      name: "Register",
      icon: <FcFlashOn />,
      link: "/register",
    });
  }

  const onLogout = () => {
    navigate("/login", {
      replace: true,
    });
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

        <div className="links">
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

        {status === "authenticated" && (
          <button className="logout" onClick={onLogout}>
            <FcExport /> <span>Logout</span>
          </button>
        )}
      </div>
    </div>
  );
}

export default Sidebar;
