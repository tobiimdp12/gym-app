import React from "react";

function VideosExercises({ exerciseVideos, name }) {
  console.log(exerciseVideos);
  return (
    <>
      <h3 style={{ textAlign: "center", color: "white" }}>
        Some tutorials to <span>{name}</span>
      </h3>
      <div className="video-exercises">
        {exerciseVideos
          ? exerciseVideos.slice(0, 3)?.map((item, index) => (
              <a
                key={index}
                className="exercise-video"
                href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
                target="_blank"
                rel="noreferrer"
              >
                <img
                  style={{ borderTopLeftRadius: "20px" }}
                  src={item.video.thumbnails[0].url}
                  alt={item.video.title}
                />
                <div>
                  <h2>{item.video.title}</h2>
                  <h3>{item.video.channelName}</h3>
                </div>
              </a>
            ))
          : "loading"}
      </div>
    </>
  );
}

export default VideosExercises;
