import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.scss";
import "./index.css";
import "./App.css";

import DocumentPage from "./components/Pages/DocumentPage";
import Navbar from "./Navbar/Navbar.jsx";

const App = () => {
  const [route, setRoute] = useState("null");
  const navigationClicked = (url) => {
    if (url == "/") {
      localStorage.setItem("url", url);
      setRoute(url);
    }
  };
  return (
    <>
      <div className="App">
        <Navbar />
        <DocumentPage></DocumentPage>
      </div>
    </>
  );
};

export default App;
