import "./Navbar.css";
import React, { useEffect, useState, useRef } from "react";

const Navbar = () => {
  return (
    <header>
      <h3>V-trac</h3>
      <nav className="navbar">
        <a href="/#">Home</a>
      </nav>
    </header>
  );
};

export default Navbar;
