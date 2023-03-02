import React from "react";
import "./App.scss";
import "@progress/kendo-theme-default/dist/all.css";

import VtracPage from "./components/Pages/VtraceDataPage";
import Navbar from "./Navbar/Navbar.jsx";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <VtracPage />
    </div>
  );
};

export default App;
// --testing the code
