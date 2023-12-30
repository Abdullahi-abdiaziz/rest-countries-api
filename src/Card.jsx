import React from "react";

const Card = ({ country }) => {
  const { name, population, region, capital, flag } = country;

  return (
    <article className="card">
      <div>
        <img src={flag} alt={name} />
        <div className="card__details">
          <h3>{name}</h3>
          <h4>
            Population: <span>{population}</span>
          </h4>
          <h4>
            Region: <span>{region}</span>
          </h4>
          <h4>
            Capital: <span>{capital}</span>
          </h4>
        </div>
      </div>
    </article>
  );
};

export default Card;
