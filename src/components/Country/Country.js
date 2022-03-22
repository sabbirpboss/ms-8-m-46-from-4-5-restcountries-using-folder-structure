import React from 'react';
import './Country.css';

const Country = (props) => {
    return (
        <div className='country'>
            <h2>Country Name: {props.name}</h2>
            <p>Capital: {props.capital}</p>
            <p>Population: {props.population}</p>
            <p><small>Region: {props.region}</small></p>
        </div>
    );
};

export default Country;