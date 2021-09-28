import React, { Component } from 'react';
import SwapiServise from '../../service/swapi-service';

import './person-details.css';

export default class ItemDetails extends Component {

  swapiServise = new SwapiServise();

  state = {
    item: null,
    image: null
  }

  componentDidMount() {
    this.updatedPerson()
  }

  componentDidUpdate(prevProps) {
    if (this.props.itemId !== prevProps.itemId) {
      this.updatedPerson()
    }
  }

  updatedPerson() {
    const { itemId, getData, getImageUrl } = this.props
    
    if (!itemId) {
      return;
    }

    getData(itemId)
      .then((item) => {
        this.setState({
          item,
          image: getImageUrl(item)
        
        })
      })
    
  }

  render() {

    if (!this.state.item) {
      return <span>Select peson from list</span>
    }

    const { item, image } = this.state;
    
    const { id, name, gender,
      birthYear, eyeColor } = item;

    return (
      <div className="person-details card">
        <img className="person-image"
          src={image}  alt='characters'/>

        <div className="card-body">
          <h4>{name}</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <span className="term">Gender</span>
              <span>{gender}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Birth Year</span>
              <span>{birthYear}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Eye Color</span>
              <span>{eyeColor}</span>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}
