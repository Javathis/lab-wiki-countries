import React from 'react';
import logo from './logo.svg';
import './App.css';
import countries from './countries.json';
import { Switch, Route } from 'react-router-dom';
import CountryDetail from './CountryDetail';
import { Link } from 'react-router-dom';



let countriesList = [...countries];

function App() {
  return (
    <div>
      <nav>WikiCountries</nav>
      <div className="App">
        <div>
          <Switch>
            <Route path='/:id' component={CountryDetail} />
          </Switch>
        </div>

        <div className="flexbox">
          {countriesList.map(country => {
            return (
              <div key={country.cca3}>
                <h3>
                  <Link to={`/${country.cca3}`}>{country.flag}{country.name.common}</Link>
                </h3>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
