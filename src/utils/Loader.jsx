import React from "react";
import loading from "../assets/loading.gif";
function Loader() {
  const logged = localStorage.getItem("logged");

  if (logged !== null) {
    navigate("/home", {
      replace: true,
    });
  }

  return (
    <div className="loading-container">
      <img src={loading} />
    </div>
  );
}

export default Loader;
