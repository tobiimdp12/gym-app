import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export function deleteHero  (id){
    let arrayHero = JSON.parse(localStorage.getItem("userHeroes"));
  
    if (arrayHero != null) {
      arrayHero.map(function (hero, index) {
        if (hero.id === id) {
          return arrayHero.splice(index, 1);
        }
      });
      toast.warn("hero deleted successfully", {
        position: toast.POSITION.TOP_CENTER,
      });
      localStorage.setItem("userHeroes", JSON.stringify(arrayHero)); //set it in the localStorage
    }
  };