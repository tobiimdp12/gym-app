import React, { useEffect, useState } from "react";
import Pagination from "../../Components/Pagination/Pagination";
import SearchExercises from "../../Components/SearchExercises/SearchExercises";
import Herobanner from "../../Components/Herobanner/Herobanner";
import HorizontalCarousel from "../../Components/BodyPartCarousel/HorizontalCarousel";
import Exercises from "../../Components/Exercises/Exercises";
import ExerciseCard from "../../Components/ExerciseCard/ExerciseCard";

function Home() {
  const [exercises, setExercises] = useState([]);
  const [bodyPart, setBodyPart] = useState("all");

  if (localStorage.getItem("favorites") === null) {
    localStorage.setItem("favorites", JSON.stringify([]));
    console.info("creando favoritos");
  }

  return (
    <>
      <div className="pages">
        <Herobanner />
        <SearchExercises
          setExercises={setExercises}
          bodyPart={bodyPart}
          setBodyPart={setBodyPart}
        />
        <Exercises
          setExercises={setExercises}
          exercises={exercises}
          bodyPart={bodyPart}
        />
      </div>
    </>
  );
}

export default Home;
