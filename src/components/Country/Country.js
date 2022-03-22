import React from "react";
import "./Country.css";

const Country = (props) => {
    console.log(props.country);
    const {name, region, area, population, flags} = props.country;
  return (
    <div className="country">
      <img src={flags.png} alt="" />
      <h2>{name.common}</h2>
      <p>Capital: {capital}</p>
      <p>
        <small>Region: {region}</small>
      </p>
      <h5>Area: {area}</h5>
      <p>Population: {population}</p>
    </div>
  );
};

export default Country;
