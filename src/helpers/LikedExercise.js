export default function LikedExercise(exercise) {
  //traer lista favoritos redux

  const favoritesExercise = JSON.parse(localStorage.getItem("favorites"));
  const logged = localStorage.getItem("logged");

  let isLiked = false;

  if (favoritesExercise === null || !logged) return false;

  for (let e of favoritesExercise) {
    if (e.id === exercise.id) {
      //si esta en el local storage quiere decir que lo le dimos me gusta
      isLiked = true;
      break;
    }
  }
  return isLiked;
}
