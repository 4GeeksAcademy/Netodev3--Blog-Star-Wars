import StarWars from "/src/img/StarWars.png";
import { Link } from "react-router-dom";
import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";

export const Navbar = () => {
  const { store, actions } = useContext(Context);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const dropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <nav className="navbar mb-3 fixed-top">
      <Link to="/">
        <span className="navbar-brand mb-0 h1">
          <img
            src={StarWars}
            alt="Star Wars Logo"
            className="mr-2"
            style={{ height: "70px" }}
          />
        </span>
      </Link>
      <div className="ml-auto">
        <div className="dropdown" onClick={dropdown}>
          <button
            className="shadow__btn dropdown-toggle"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded={dropdownOpen ? "true" : "false"}
          >
            Favorites{" "}
            <span className="badge badge-pill badge-primary">
              {store.favorites.length}
            </span>
          </button>
          <div
            className={`dropdown-menu ${dropdownOpen ? "show" : ""}`}
            aria-labelledby="dropdownMenuButton"
          >
            {store.favorites.map((favorite, index) => (
              <div
                key={index}
                className="dropdown-item d-flex justify-content-between"
              >
                <span>{favorite.name}</span>
                <span
                  className="delete-icon"
                  onClick={() => actions.removeFromFavorites(index)}
                >
                  🗑️
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};
