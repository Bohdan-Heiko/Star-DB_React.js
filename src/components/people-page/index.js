import React, { Component } from 'react';
import SwapiServise from '../../service/swapi-service';
import ErrorIndicator from '../error-indicator';
import ItemList from '../item-list';
import ItemDetails from '../item-details';
import Row from '../row';
import ErrorBoundry from '../error-boundry'



export default class PeoplePage extends Component {

  swapiService = new SwapiServise();

  state = {
    selectedPerson: 1,
  }

  onPersonSelected = (id) => {
    this.setState({
      selectedPerson: id
    })
  }


  render() {

    if (this.hasError) {
      return <ErrorIndicator />
    }

    const itemtList = (
      <ItemList itemSelected={this.onPersonSelected}
        getData={this.swapiService.getAllPeople}
      >
        {/* props.vhildren  */}
        {(i) => (
         `${i.name}, ${i.gender}`)
        }
        </ItemList>
    )


    const personDeatails = (
      <ErrorBoundry>
        <ItemDetails itemId={this.state.selectedPerson} />
      </ErrorBoundry>
    )

    return (
      <>
        <Row left={itemtList} right={personDeatails} />
      </>
    )
  }
}