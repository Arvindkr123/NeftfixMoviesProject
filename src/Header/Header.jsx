import React from "react";
import Logo from "../logo.png";
import "../components/Home.scss";
import { Link } from "react-router-dom";
import { ImSearch } from "react-icons/im";

const Header = () => {
  return (
    <nav className="header">
      <img src={Logo} alt="logo" />
      <div>
        <Link to="/tvshows">TV Shows</Link>
        <Link to="/movies">Movies</Link>
        <Link to="/recent">Recently Added</Link>
        <Link to="/mylist">My List</Link>
      </div>
      <ImSearch />
    </nav>
  );
};

export default Header;
