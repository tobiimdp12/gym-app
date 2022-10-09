import React, { useEffect, useState } from "react";
import { exerciseOptions, fetchData } from "../../utils/fetchData";
import HorizontalCarousel from "../BodyPartCarousel/HorizontalCarousel";
import { FaSearch } from "react-icons/fa";

function SearchExercises({ setExercises, bodyPart, setBodyPart }) {
  const [search, setSearch] = useState("");
  const [bodyParts, setBodyParts] = useState([]);

  useEffect(() => {
    const fetchExercisesData = async () => {
      const bodyPartsData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
        exerciseOptions
      );

      setBodyParts(["all", ...bodyPartsData]);
    };

    fetchExercisesData();
  }, []);

  const handleSearch = async () => {
    if (search) {
      const exercisesData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises",
        exerciseOptions
      );

      const searchedExercises = exercisesData.filter(
        (item) =>
          item.name.toLowerCase().includes(search) ||
          item.target.toLowerCase().includes(search) ||
          item.equipment.toLowerCase().includes(search) ||
          item.bodyPart.toLowerCase().includes(search)
      );

      window.scrollTo({ top: 1800, left: 100, behavior: "smooth" });

      setSearch("");
      setBodyPart("all");
      setExercises(searchedExercises);
    }
  };

  console.log(bodyParts);
  return (
    <div className="search-container" id="search">
      <h2>
        <b>
          Awesome Exercises You <br /> Should Know
        </b>
      </h2>
      <div className="form">
        <input
          type="text"
          placeholder="search a exercise"
          className="input"
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
        />
        <button className="search-btn" onClick={handleSearch}>
          <FaSearch />
        </button>
      </div>
      <HorizontalCarousel
        items={bodyParts}
        setBodyPart={setBodyPart}
        bodyPart={bodyPart}
      />
    </div>
  );
}

export default SearchExercises;
