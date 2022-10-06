import React, { useEffect } from "react";
import { exerciseOptions, fetchData } from "../../utils/fetchData";
import Pagination from "../Pagination/Pagination";

function Exercises({ exercises, setExercises, bodyPart }) {
  useEffect(() => {
    const fetchExercisesData = async () => {
      let exercisesData = [];

      if (bodyPart === "all") {
        exercisesData = await fetchData(
          "https://exercisedb.p.rapidapi.com/exercises",
          exerciseOptions
        );
      } else {
        exercisesData = await fetchData(
          `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,
          exerciseOptions
        );
      }

      setExercises(exercisesData);
    };

    fetchExercisesData();
  }, [bodyPart]);
  return exercises && <Pagination exercises={exercises} />;
}

export default Exercises;
