import {
  collection,
  doc,
  setDoc,
  getDocs,
  deleteDoc,
} from "firebase/firestore/lite";
import { FirebaseDB } from "../../firebase/config";

import { addNewFavorite, setFavorites, startSaving } from "./favoritesSlice";

export const startNewFavorite = (exercise) => {
  return async (dispatch, getState) => {
    alert("entre");

    console.error(exercise);

    const { uid } = getState().auth;

    const newFavorite = {
      bodyPart: exercise.bodyPart,
      equipment: exercise.equipment,
      gifUrl: exercise.gifUrl,
      id: exercise.id,
      name: exercise.name,
      target: exercise.target,
    };
    console.log(newFavorite);
    const newDoc = doc(collection(FirebaseDB, `${uid}/favorites/exercise`));
    newFavorite.firebaseID = newDoc.id;
    await setDoc(newDoc, newFavorite);

    newFavorite.id = newDoc.id;

    dispatch(addNewFavorite(newFavorite));
  };
};

export const startLoadingFavorites = () => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth;

    const collectionRef = collection(FirebaseDB, `${uid}/favorites/exercise`);
    const { docs } = await getDocs(collectionRef);

    const favorites = docs.map((doc) => ({ id: doc.id, ...doc.data() }));

    dispatch(setFavorites(favorites));
  };
};

export const startDeleteFavorite = (exercise) => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth;

    const docRef = doc(
      FirebaseDB,
      `${uid}/favorites/exercise/${exercise.firebaseID}`
    );

    await deleteDoc(docRef);

    dispatch(deleteFavoriteGame(exercise.id));
  };
};
