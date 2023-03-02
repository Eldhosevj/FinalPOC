import React from "react";
import "./App.scss";
import Sharedatapage from "./components/Pages/SharedDataPage";
import Navbar from "./Navbar/Navbar.jsx";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Sharedatapage />
    </div>
  );
};

export default App;
