import React from "react";

export const Card = props => {
  return (
    <div className={`card card--${props.css}`}>
      <div className={`card__side card__side--front background-${props.css}`}>
        <div className="card__side--front-header">{props.name}</div>
        <img
          src={props.img}
          alt={`${props.name} Logo`}
          className="card__side--front-image"
        />
      </div>
      <div className={`card__side card__side--back background-${props.css}`}>
        <ul className="card__side--back__list">
          {props.paragraphs.map(p => (
            <li key={p}>{p}</li>
          ))}
        </ul>
        <img
          src={props.img}
          alt={`${props.name} Logo`}
          className="card__side--front-image"
        />
      </div>
    </div>
  );
};

export default Card;
