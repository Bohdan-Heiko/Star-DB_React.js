import React, { Component } from 'react';
import SwapiService from '../../service/swapi-service'

import './random-planet.css';

export default class RandomPlanet extends Component {

  swapiservice = new SwapiService()

  state = {
    id: null, 
    name: null,
    population: null,
    rotationperiod: null,
    diameter: null
  }

  constructor() {
    super();
    this.updaPlanet();
  }

  updaPlanet = () => {
    const id = 12
    this.swapiservice
      .getPlanet(id)
      .then((planet) => {
        this.setState({
         
        })
    })
  }

  render() {

    const { id ,name, population, rotationperiod, diameter } = this.state; 

    return (
      <div className="random-planet jumbotron rounded">
        <img className="planet-image"
             src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} alt='star panet'/>
        <div>
          <h4>{name}</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <span className="term">Population</span>
              <span>{population}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Rotation Period</span>
              <span>{rotationperiod}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Diameter</span>
              <span>{diameter}</span>
            </li>
          </ul>
        </div>
      </div>

    );
  }
}
