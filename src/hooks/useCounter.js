import { useState } from "react";

export const useCounter = (initialValue = 1) => {
  //por que con botones funciona y si llamo a las funciones solas no?
  const [counter, setCounter] = useState(initialValue);

  const increment = (value, maxValue) => {
    if (counter >= maxValue) return;
    setCounter(counter + value);
  };
  const decrement = (value, minValue) => {
    if (counter === minValue) return;
    setCounter(counter - value);
  };

  const reset = () => {
    setCounter(initialValue);
  };
  return {
    counter,
    increment,
    decrement,
    reset,
  };
};
