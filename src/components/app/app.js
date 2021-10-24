import React, { Component } from 'react';
import {Route} from 'react-router-dom'
import './app.css';


import Header from '../header';
import ErrorIndicator from '../error-indicator';
import SwapiServise from '../../service/swapi-service';
import DummySwapiServise from '../../service/dummy-swapi-service';
import ErrorBoundry from '../error-boundry';
import PeoplePages from '../pages/peoplePages';
import { SwapiServiceProvider } from '../swapi-service-context'
import PlanetPages from '../pages/planetPages';
import StarshipPages from '../pages/starshipsPages';
import RandomPlanet from '../random-planet';
import StarshipDetails from '../sw-components/details/starship-details';

export default class App extends Component {

  swapiService = new DummySwapiServise();

  state = {
    hasError: false,
    swapiService: new SwapiServise()
  }

  changeData = () => {
    this.setState(({ swapiService }) => {
      const Service = swapiService instanceof SwapiServise ?
        DummySwapiServise : SwapiServise;
      return {
        swapiService: new Service()
      }
    })
  }

  componentDidCatch() {
  this.setState({hasError:true})
  }

  render() {

    if (this.hasError) {
      return <ErrorIndicator />
    }

    return (
      <ErrorBoundry>
        <SwapiServiceProvider value={this.state.swapiService} >
        <div className='stardb-app'>
            <Header changeData={this.changeData} />
            <RandomPlanet />
            
            <Route path='/' exact render={() => <h2>Welcome to StarDB</h2>}/>
            <Route path='/people' component={PeoplePages} />
            <Route path='/planets' component={PlanetPages} />
            <Route path='/starships' exact component={StarshipPages} />
            <Route path='/starships/:id' render={({ match }) => {
              const {id} = match.params
              return <StarshipDetails itemId={id}/>
            }} />

        </div>
        </SwapiServiceProvider>
      </ErrorBoundry>
    );
  }
};

