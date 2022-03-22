import React from "react";
import "./Country.css";

const Country = (props) => {
    console.log(props.country);
    const {name, region, area, capital, population} = props.country;
  return (
    <div className="country">
      <h2>Country Name: {name.common}</h2>
      <p>Capital: {capital}</p>
      <p>Population: {population}</p>
      <p>
        <small>Region: {region}</small>
      </p>
      <h5>Area: {area}</h5>
    </div>
  );
};

export default Country;
