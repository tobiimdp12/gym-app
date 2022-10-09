import React from "react";
import bannerImage from "../../assets/banner.jpg";
import logo from "../../assets/logo.png";

function Herobanner() {
  return (
    <div className="hero-banner-container">
      <img
        src={logo}
        className="hero-banner-icon  animate__animated  animate__fadeInLeftBig"
      />
      <div className="hero-banner-left-content  ">
        <h3>Go Gym Club</h3>
        <h2>Sweat, Smile And Repeat</h2>
        <p>Check out the most effective exercises personalized to you</p>
        <a href="#search" className="hero-banner-btn">
          Explore Exercises
        </a>

        <br />
        <br />
        <h4 className="hero-banner-subtext">Exercises</h4>
      </div>

      <img
        src={bannerImage}
        alt="gym"
        className="hero-banner-img animate__animated  animate__flipInY"
      />
    </div>
  );
}

export default Herobanner;
