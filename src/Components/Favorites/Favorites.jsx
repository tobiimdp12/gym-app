import React from "react";
import ExerciseCard from "../ExerciseCard/ExerciseCard";

function Favorites() {
  const favoriteList = JSON.parse(localStorage.getItem("favorites"));

  return (
    <div className="pages">
      <h1>Favorites</h1>
      <div className="grid-container">
        {favoriteList.map((exercise) => {
          return <ExerciseCard key={exercise.id} exercise={exercise} />;
        })}
      </div>
    </div>
  );
}

export default Favorites;
