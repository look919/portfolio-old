import React from 'react';
import { v4 as uuidv4 } from 'uuid';

export const Card = ({ name, img, paragraphs, css }) => {
  return (
    <div className={`card card--${css}`}>
      <div className={`card__side card__side--front background-${css}`}>
        <div className='card__side--front-header'>{name}</div>
        <img
          src={img}
          alt={`${name} Logo`}
          className='card__side--front-image'
        />
      </div>
      <div className={`card__side card__side--back background-${css}`}>
        <ul className='card__side--back__list'>
          {paragraphs.map((p) => (
            <li key={uuidv4()}>{p}</li>
          ))}
        </ul>
        <img
          src={img}
          alt={`${name} Logo`}
          className='card__side--front-image'
        />
      </div>
    </div>
  );
};

export default Card;
