import React from "react";
import "./App.scss";
import "./App.css";
import "./index.css";
import "@progress/kendo-theme-default/dist/all.css";
import ShippingDataPage from "./components/Pages/ShippingDataPage";
import Navbar from "./Navbar/Navbar.jsx";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <ShippingDataPage />
    </div>
  );
};

export default App;
