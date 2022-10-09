import React from "react";
import { FaAngleDoubleRight, FaAngleDoubleLeft } from "react-icons/fa";
import { useCounter } from "../../Hooks/useCounter";
import ExerciseCard from "../ExerciseCard/ExerciseCard";

function Pagination({ exercises }) {
  if (!exercises) return;
  const { counter, increment, decrement } = useCounter(1);

  const TOTAL_PER_PAGE = 5;

  var totalPages = Math.ceil(exercises?.length / TOTAL_PER_PAGE);
  if (exercises.length === 0) totalPages = 1;

  let currentExercises = exercises?.slice(
    (counter - 1) * TOTAL_PER_PAGE,
    (counter - 1) * TOTAL_PER_PAGE + TOTAL_PER_PAGE
  );

  return (
    <div className="pagination-container">
      <div className="pagination-header">
        <button
          className="buttons"
          onClick={() => {
            decrement(1, 1);
          }}
        >
          <FaAngleDoubleLeft />
        </button>
        <h1>
          Page {counter} of {totalPages}
        </h1>
        <button
          className="buttons"
          onClick={() => {
            increment(1, totalPages);
          }}
        >
          <FaAngleDoubleRight />
        </button>
      </div>

      <div className=" grid-container">
        {currentExercises
          ? currentExercises?.map((exercise) => {
              return <ExerciseCard key={exercise.id} exercise={exercise} />;
            })
          : "Loading"}
      </div>

      <div className="pagination-header">
        <button
          className="buttons"
          onClick={() => {
            decrement(1, 1);
          }}
        >
          <FaAngleDoubleLeft />
        </button>
        <h1>
          Page {counter} of {totalPages}
        </h1>
        <button
          className="buttons"
          onClick={() => {
            increment(1, totalPages);
          }}
        >
          <FaAngleDoubleRight />
        </button>
      </div>
    </div>
  );
}

export default Pagination;
