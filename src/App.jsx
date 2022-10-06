import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import RouteManager from "./route/RouteManager";
import "./App.scss";

function App() {
  return (
    <div>
      <BrowserRouter>
        <RouteManager />
      </BrowserRouter>
    </div>
  );
}

export default App;
