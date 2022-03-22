import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css';

const Countries = () => {
    const [countries, setCountries] = useState([]);
    useEffect( () => {
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountries(data))
    }, [])
    return (
        <div>
            <h1>Rest countries practice <i>(Countries.js)</i>
            </h1>
            <h3>Available Countries: {countries.length}</h3>
            {
                countries.map(country => <Country name = {country.name.common} capital = {country.capital} population = {country.population} region = {country.region}></Country>)
            }
        </div>
    );
};

export default Countries;