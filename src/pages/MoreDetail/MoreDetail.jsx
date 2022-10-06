import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router";
import { FaBackward } from "react-icons/fa";
import MoreDetails from "../../Components/MoreDetails/MoreDetails";
import VideosExercises from "../../Components/VideoExercises/VideosExercises";
import {
  exerciseOptions,
  fetchData,
  youtubeOptions,
} from "../../utils/fetchData";
import Loader from "../../utils/loader";

function MoreDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [exerciseDetail, setExerciseDetail] = useState({});
  const [exerciseVideos, setExerciseVideos] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    const fetchExercisesData = async () => {
      const exerciseDbUrl = "https://exercisedb.p.rapidapi.com";
      const youtubeSearchUrl =
        "https://youtube-search-and-download.p.rapidapi.com";

      const exerciseDetailData = await fetchData(
        `${exerciseDbUrl}/exercises/exercise/${id}`,
        exerciseOptions
      );
      setExerciseDetail(exerciseDetailData);

      const exerciseVideosData = await fetchData(
        `${youtubeSearchUrl}/search?query=${exerciseDetailData.name} exercise`,
        youtubeOptions
      );
      setExerciseVideos(exerciseVideosData.contents);
    };

    fetchExercisesData();
  }, [id]);
  console.log(exerciseDetail);
  const onNavigateBack = () => {
    navigate(-1);
  };
  return (
    <div>
      <button className="back-button" onClick={onNavigateBack}>
        <FaBackward />
      </button>
      {!exerciseDetail ? (
        <Loader />
      ) : (
        <div>
          <MoreDetails exerciseDetail={exerciseDetail} />
          <VideosExercises
            exerciseVideos={exerciseVideos}
            name={exerciseDetail.name}
          />
        </div>
      )}
    </div>
  );
}

export default MoreDetail;
