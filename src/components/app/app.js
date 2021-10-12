import React, { Component } from 'react';
import './app.css';

import Header from '../header';
import RandomPlanet from '../random-planet';
import ErrorIndicator from '../error-indicator';
import Record from '../record';
import SwapiServise from '../../service/swapi-service';
import DummySwapiServise from '../../service/dummy-swapi-service';
import ItemDetails from '../item-details';
import ErrorBoundry from '../error-boundry';
import { PersonList, PlanetList, StarshipList } from '../sw-components/item-lists';
import PersonDetails from '../sw-components/details/person-details'
import PlanetDetails from '../sw-components/details/planet-details'
import StarshipDetails from '../sw-components/details/starship-details'

import { SwapiServiceProvider } from '../swapi-service-context'

// import PeoplePage from '../people-page'

export default class App extends Component {

  swapiService = new DummySwapiServise();

  state = {
    hasError: false
  }

  componentDidCatch() {
  this.setState({hasError:true})
  }
  
  render() {

    const { getPerson,
            getStarships,
            getPersonImage,
            getStarshipImage,
            getAllPeople,
            getAllPlanets
    } = this.swapiService

    if (this.hasError) {
      return <ErrorIndicator />
    }
  
    const peopleDetails = (
      <ItemDetails
        itemId={5}
        getData={getPerson}
        getImageUrl={getPersonImage}
      >
        <Record field='gender' label='gender' />
        <Record field='eyeColor' label='Eye Color' />
      </ItemDetails>
    )

    const starshipDetails = (
      <ItemDetails
        itemId={10}
        getData={getStarships}
        getImageUrl={getStarshipImage}
      >
        <Record field='model' label='Model' />
        <Record field='length' label='Length' />
        <Record field='cost_in_credits' label='Cost' />
      </ItemDetails>
    )

    return (
      <ErrorBoundry>
        <SwapiServiceProvider value={this.swapiService} >
        <div className='stardb-app'>
          <Header />
          <RandomPlanet />

          <PersonDetails itemId={11} />
          <PlanetDetails itemId={5} />
          <StarshipDetails itemId={10} />

          <PersonList />
  
          <div className="row" />
            <PlanetList />
            
          <div className="row" />
            <StarshipList />
            
        </div>
        </SwapiServiceProvider>
      </ErrorBoundry>
    );
  }
};

