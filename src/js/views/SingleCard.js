import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

const SingleCard = () => {
  const types = {
    people: "characters",
    planets: "planets",
    starships: "starships",
  };
  const [info, setInfo] = useState({});
  const { id, type } = useParams();
  const imageUrl = `https://starwars-visualguide.com/assets/img/${types[type]}/${id}.jpg`;

  useEffect(() => {
    fetch(`https://www.swapi.tech/api/${type}/${id}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data.result.properties), setInfo(data.result.properties);
      })
      .catch((error) => error);
  }, [id, type]);

  const properties = () => {
    if (type == "planets") {
      return (
        <div className="properties-card">
          <p className="diameter">
            <u>Diameter:</u> {info.diameter}
          </p>
          <p className="rotation_period">
            <u>Rotation Period:</u> {info.rotation_period}
          </p>
          <p className="orbital_period">
            <u>Orbital Period:</u> {info.orbital_period}
          </p>
          <p className="population">
            <u>Population:</u> {info.population}
          </p>
          <p className="climate">
            <u>Climate:</u> {info.climate}
          </p>
          <p className="terrain">
            <u>Terrain:</u> {info.terrain}
          </p>
        </div>
      );
    } else if (type == "people") {
      return (
        <div className="properties-card">
          <p className="birth_year">
            <u>Birth Year:</u> {info.birth_year}
          </p>
          <p className="eye_color">
            <u>Eye Color:</u> {info.eye_color}
          </p>
          <p className="gender">
            <u>Gender:</u> {info.gender}
          </p>
          <p className="hair_color">
            <u>Hair color:</u> {info.hair_color}
          </p>
          <p className="height">
            <u>Height:</u> {info.height}
          </p>
          <p className="homeworld">
            <u>Home World:</u> {info.homeworld}
          </p>
          <p className="mass">
            <u>Mass:</u> {info.mass}
          </p>
        </div>
      );
    } else {
      return (
        <div className="properties-card">
          <p className="model">
            <u>Model:</u> {info.model}
          </p>
          <p className="starship_class">
            <u>Starship Class:</u> {info.starship_class}
          </p>
          <p className="manufacturer">
            <u>Manufacturer:</u> {info.manufacturer}
          </p>
          <p className="length">
            <u>Length:</u> {info.length}
          </p>
        </div>
      );
    }
  };
  console.log(info.population);
  return (
    <div className="container individual-info">
      <div className="row">
        <div className="col image">
          <img
            src={imageUrl}
            className="card-img-top"
            alt="..."
            onError={({ currentTarget }) => {
              currentTarget.onerror = null;
              currentTarget.src =
                "https://starwars-visualguide.com/assets/img/placeholder.jpg";
            }}
          />
        </div>
        <div className="col individual-text">
          <h1 className="name">{info.name}</h1>
          {properties()}
        </div>
      </div>
      <Link to="/">
        <p>Back home</p>
      </Link>
    </div>
  );
};

export default SingleCard;
