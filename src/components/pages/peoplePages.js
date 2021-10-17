import React, { Component } from 'react';
import Row from '../row';
import PersonDetails from '../sw-components/details/person-details';
import { PersonList } from '../sw-components/item-lists';


export default class PeoplePages extends Component {

  state = {
    selectedItem: null
  }

  itemSelected = (selectedItem) => {
    this.setState({
      selectedItem
    })
  }

  render() {
    const { selectedItem} = this.state
    return (
      <Row
        left={<PersonList itemSelected={this.itemSelected}/>}
        right={<PersonDetails itemId={selectedItem} />}
      />

    )
  }
}