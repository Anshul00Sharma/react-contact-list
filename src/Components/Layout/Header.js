import React from "react";
import { Link } from "react-router-dom";

// header contains the app title
const Header = ({ title }) => {
  return (
    <header className="Header">
      <Link to="/" style={{ textDecoration: "none", color: "whitesmoke" }}>
        <h1>{title}</h1>
      </Link>
    </header>
  );
};

export default Header;
