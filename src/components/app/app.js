import React, { Component } from 'react';
import './app.css';

import Header from '../header';
import RandomPlanet from '../random-planet';
import ErrorIndicator from '../error-indicator';
import Record from '../record';
import SwapiServise from '../../service/swapi-service';
import Row from '../row';
import ItemDetails from '../item-details';
import ErrorBoundry from '../error-boundry';
import ItemList from '../item-list'
// import PeoplePage from '../people-page'

export default class App extends Component {

  swapiService = new SwapiServise();

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
        <div className='stardb-app'>
          <Header />

          <ItemList
            getData={getAllPeople}
            itemSelected={() => {}}
          >
          {({name}) => <span>{name}</span>}
          </ItemList>

          <ItemList
            getData={getAllPlanets}
            itemSelected={() => {}}
          >
            {({name}) => <span>{name}</span>}
          </ItemList>
        </div>

      </ErrorBoundry>
    );
  }
};

