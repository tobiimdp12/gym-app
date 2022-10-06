import React, { useState } from "react";
import Pagination from "../../Components/Pagination/Pagination";
import SearchExercises from "../../Components/SearchExercises/SearchExercises";
import Herobanner from "../../Components/Herobanner/Herobanner";
import HorizontalCarousel from "../../Components/BodyPartCarousel/HorizontalCarousel";
import Exercises from "../../Components/Exercises/Exercises";

function Home() {
  const [exercises, setExercises] = useState([]);
  const [bodyPart, setBodyPart] = useState("all");

  /*
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
  */
  return (
    <>
      <div className="pages"></div>
    </>
  );
}

export default Home;
