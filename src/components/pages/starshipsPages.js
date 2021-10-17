import React, { Component } from 'react';
import Row from '../row';
import StarshipDetails from '../sw-components/details/starship-details';
import { StarshipList } from '../sw-components/item-lists';


export default class StarshipPages extends Component {

  state = {
    selectedItem: null
  }

  itemSelected = (selectedItem) => {
    this.setState({
      selectedItem
    })
  }

  render() {
    const { selectedItem } = this.state
    return (
      <Row
        left={<StarshipList itemSelected={this.itemSelected} />}
        right={<StarshipDetails itemId={selectedItem} />}
      />

    )
  }
}