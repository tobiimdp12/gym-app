export const exerciseOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Host": import.meta.env.VITE_RAPID_HOST_EX,
    "X-RapidAPI-Key": import.meta.env.VITE_RAPID_APIKEY,
  },
};

export const youtubeOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Host": import.meta.env.VITE_RAPID_HOST_YT,
    "X-RapidAPI-Key": import.meta.env.VITE_RAPID_APIKEY,
  },
};

export const fetchData = async (url, options) => {
  const res = await fetch(url, options);
  const data = await res.json();

  return data;
};
