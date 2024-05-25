import { Link } from "react-router-dom";
import React, { useContext } from "react";
import { Context } from "../store/appContext";

const CustomCard = (props) => {
  const types = {
    people: "characters",
    planets: "planets",
    starships: "starships",
  };
  const imageUrl = `https://starwars-visualguide.com/assets/img/${
    types[props.type]
  }/${props.index}.jpg`;
  console.log(props.type, props.index);
  const { actions } = useContext(Context);

  const favorite = () => {
    actions.addToFavorites(props);
  };

  return (
    <div className="card translucent-card" key={props.id}>
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
      <div className="card-body">
        <h5 className="card-title">{props.name}</h5>
        <div className="d-flex justify-content-between">
          <Link to={`/individual/${props.type}/${props.index}`}>
            <button className="custom-btn btn-1">Read More</button>
          </Link>
          <button className="bookmarkBtn align-self-end" onClick={favorite}>
            <span className="IconContainer">
              <svg viewBox="0 0 384 512" height="0.9em" class="icon">
                <path d="M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z"></path>
              </svg>
            </span>
            <p className="text"></p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CustomCard;
