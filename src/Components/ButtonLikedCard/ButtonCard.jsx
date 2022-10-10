import React, { useState } from "react";
import { AiTwotoneHeart } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";

function ButtonCard({ exercise, handleLiked }) {
  const [isLiked, setIsLiked] = useState(handleLiked);

  const { uid } = useSelector((state) => state.auth);
  const SaveEx = () => {
    if (!uid)
      return Swal.fire({
        icon: "error",
        title: "Please sign in to continue",
      });
    if (JSON.parse(localStorage.getItem("favorites")) == null) {
      //si es el primer elemento que añadimos

      const favoritesEx = [exercise];
      localStorage.setItem("favorites", JSON.stringify(favoritesEx));

      Swal.fire({
        icon: "success",
        title: "Exercise added successfully",
      });

      setIsLiked(true);
    } else {
      const favoritesEx = JSON.parse(localStorage.getItem("favorites"));
      let canAdd = true;

      for (let e of favoritesEx) {
        if (e.id === exercise.id) {
          setIsLiked(false);
          canAdd = false;
          break;
        } else {
          canAdd = true;
        }
      }

      if (canAdd) {
        favoritesEx.push(exercise);
        localStorage.setItem("favorites", JSON.stringify(favoritesEx));
        Swal.fire({
          icon: "success",
          title: "Exercise added successfully",
        });
        alert("entre");

        setIsLiked(true);
      } else {
        const result = favoritesEx.filter((e) => e.id !== exercise.id);
        localStorage.setItem("favorites", JSON.stringify(result));

        Swal.fire({
          icon: "info",
          title: "Exercise deleted successfully",
        });
      }
    }
  };

  return (
    <div>
      <a onClick={SaveEx} role="button">
        <AiTwotoneHeart className={isLiked ? "heart active" : "heart"} />
      </a>
    </div>
  );
}

export default ButtonCard;
