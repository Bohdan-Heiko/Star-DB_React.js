import React, { Component } from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';

import './app.css';
import ErrorIndicator from '../error-indicator';
import { Record } from '../item-details';

import SwapiServise from '../../service/swapi-service';
import Row from '../row';
import ItemDetails from '../item-details';

export default class App extends Component {

  swapiService = new SwapiServise();

  state = {
    hasError: false
  }

  componentDidCatch() {
  this.setState({hasError:true})
  }
  
  render() {

    const {getPerson, getStarships, getPersonImage, getStarshipImage} = this.swapiService

    if (this.hasError) {
      return <ErrorIndicator />
    }
  
    const itemDetails = (
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
      

      </ItemDetails>
    )

    return (
      <div>
        <Header />
        <RandomPlanet />
        {/* <PeoplePage /> */}
        <div className='row'></div>

        <Row left={itemDetails}
              right={starshipDetails}
        />

      </div>
    );
  }
};

