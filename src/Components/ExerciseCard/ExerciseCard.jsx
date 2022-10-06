import React from "react";
import { Link } from "react-router-dom";
import LazyImage from "react-lazy-blur-image";
import loading from "../../assets/loading.gif";

function ExerciseCard({ exercise }) {
  return (
    <Link className="exercise-card" to={`/exercise/${exercise.id}`}>
      <LazyImage
        placeholder={loading}
        uri={exercise.gifUrl}
        render={(src, style) => (
          <img src={src} alt={exercise.name} role="img" />
        )}
      />

      <div className="tags-container">
        <span className="bodyPart">{exercise.bodyPart}</span>
        <span className="targetPart">{exercise.target}</span>
      </div>

      <h3>{exercise.name}</h3>
    </Link>
  );
}

export default ExerciseCard;
