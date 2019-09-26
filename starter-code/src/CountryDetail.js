import React, { Component } from 'react';
import countries from './countries.json';
import { Link } from 'react-router-dom';


let countriesList = [...countries];



const CountryDetail = (props) => {

  const id = props.match.params.id;

  const country = countriesList.find(el => {
    return el.cca3 === id;
  });
  console.log(country);

  return (
    <div>
      <h5>Capital: {country.capital[0]}</h5>
      <h5>Area: {country.area}km2</h5>

      {country.borders.map(el => {
        let foundC= countriesList.find(name => {
            return name.cca3 === el
          })
        return (
          <h5>
          <Link to={`/${el}`}>{foundC.name.common}</Link>
        </h5>)
      })}
    </div>
  )
}

export default CountryDetail

