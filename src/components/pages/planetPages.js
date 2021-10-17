import React, { Component } from 'react';
import Row from '../row';
import PlanetDetails from '../sw-components/details/planet-details';
import { PlanetList } from '../sw-components/item-lists';


export default class PlanetPages extends Component {

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
        left={<PlanetList itemSelected={this.itemSelected} />}
        right={<PlanetDetails itemId={selectedItem} />}
      />
    )
  }
}