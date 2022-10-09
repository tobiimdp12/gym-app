import React from "react";
import { Link } from "react-router-dom";
import LazyImage from "react-lazy-blur-image";
import loading from "../../assets/loading.gif";
import LikedExercise from "../../helpers/LikedExercise";
import ButtonCard from "../ButtonLikedCard/ButtonCard";
function ExerciseCard({ exercise }) {
  let isLiked = LikedExercise(exercise);

  console.log(isLiked);
  return (
    <>
      <div className="exercise-card">
        <Link to={`/exercise/${exercise.id}`}>
          <LazyImage
            placeholder={loading}
            uri={exercise.gifUrl}
            render={(src, style) => (
              <img src={src} alt={exercise.name} role="img" />
            )}
          />
        </Link>

        <div className="tags-container">
          <span className="bodyPart">{exercise.bodyPart}</span>
          <span className="targetPart">{exercise.target}</span>
        </div>

        <h3>{exercise.name}</h3>
        <ButtonCard exercise={exercise} handleLiked={isLiked} />
      </div>
    </>
  );
}

export default ExerciseCard;
