import React from "react";
import LazyImage from "react-lazy-blur-image";
import { FaBiking, FaDumbbell, FaRunning } from "react-icons/fa";
import loading from "../../assets/loading.gif";

function MoreDetails({ exerciseDetail }) {
  const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail;

  console.log(exerciseDetail);
  const extraDetail = [
    {
      icon: <FaBiking />,
      name: bodyPart,
    },
    {
      icon: <FaRunning />,
      name: target,
    },
    {
      icon: <FaDumbbell />,
      name: equipment,
    },
  ];
  return (
    <div className="more-details-card">
      <LazyImage
        placeholder={loading}
        uri={gifUrl}
        render={(src, style) => (
          <img src={src} alt={name} role="img" />
        )}
      />

      <div className="more-details-card-text">
        <h3> {name}</h3>
        <p className="description">
          Exercises keep you strong.{" "}
          <span style={{ textTransform: "capitalize" }}>{name}</span> bup is one
          of the best <br /> exercises to target your {target}. It will help you
          improve your <br /> mood and gain energy.
        </p>

        {extraDetail.map((item) => {
          return (
            <div key={item.name} className="extras">
              {" "}
              <span>{item.icon}</span> <p>{item.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MoreDetails;
