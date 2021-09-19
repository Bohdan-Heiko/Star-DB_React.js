import React, { Component } from 'react';
import SwapiService from '../../service/swapi-service'
import ErrorIndicator from '../error-indicator';
import Spiner from '../spiner';

import './random-planet.css';

export default class RandomPlanet extends Component {

  swapiservice = new SwapiService()

  state = {
    planet: {},
    loading: true,
    error: false
  }

  componentDidMount(){
   this.interval = setInterval(this.updadePlanet, 5000)  
}
  componentWillUnmount() {
    clearInterval(this.interval)
        console.log("componentWillUnmount");

  }

  // componentWillUnmount() {
  //   clearInterval(this.interval)
  //   console.log("componentWillUnmount");
  // }

  onPlanetLoadet = (planet) => {
    this.setState({
      planet,
      loading: false,
    })
  }

  onError = () => {
    this.setState({
      error: true,
      loading: false
    })
  }

  updadePlanet = () => {
    const id = Math.floor(Math.random() * 25) + 3;
    this.swapiservice
      .getPlanet(id)
      .then(this.onPlanetLoadet)
      .catch(this.onError)
  }

  

  render() {

    const { planet, loading, error } = this.state;

    const hasData = !(loading || error)

    const errorMassage = error ? <ErrorIndicator /> : null;
    const spiner = loading ? <Spiner /> : null;
    const content = hasData ? <PlantView planet = {planet}/> : null;


    return (
      <div className="random-planet jumbotron rounded">
        {errorMassage}
        {spiner}
        {content}
      </div>

    );
  }
}




const PlantView = ({ planet }) => {
  
  const { id, name, population, rotationperiod, diameter } = planet;


  return (
    <>
      <img className="planet-image"
        src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} alt='star panet' />
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
    </>
  )
}
