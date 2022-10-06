import React from "react";
import { FaDumbbell } from "react-icons/fa";

function BodyPart({ item, setBodyPart, bodyPart }) {
  const styles = `body-part-container ${bodyPart === item && "bodyPartActive"}`;
  return (
    <div className={styles} onClick={() => setBodyPart(item)}>
      <FaDumbbell />
      <h3>{item}</h3>
    </div>
  );
}

export default BodyPart;
