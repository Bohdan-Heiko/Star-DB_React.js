import React, { Component } from 'react';
import SwapiServise from '../../service/swapi-service';
import ErrorIndicator from '../error-indicator';
import ItemList from '../item-list';
import PersonDetails from '../person-details';
import Row from '../row';




export default class PeoplePage extends Component {

  swapiService = new SwapiServise();

  state = {
    selectedPerson: 1,
    hasError: false
  }

  onPersonSelected = (id) => {
    this.setState({
      selectedPerson: id
    })
  }


  componentDidCatch() {
    this.setState({hasError: true})
  }


  render() {

    if (this.hasError) {
      return <ErrorIndicator />
    }

    const itemtList = (
      <ItemList itemSelected={this.onPersonSelected}
        getData={this.swapiService.getAllPeople}
        renderItem={({ name, gender, birthYear }) => `${name} (${gender})`}
      />
    )

    const personDeatails = (
      <PersonDetails personId={this.state.selectedPerson} />
    )

    return (
      <>
        <Row left={itemtList} right={personDeatails} />
        
      </>
    )
  }
}