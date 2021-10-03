import React, { Component } from 'react';
import './person-details.css';

import SwapiServise from '../../service/swapi-service';




 export default class ItemDetails extends Component {

  swapiServise = new SwapiServise();

  state = {
    item: null,
    image: null
  }

  componentDidMount() {
    this.updatedItem()
  }

  componentDidUpdate(prevProps) {
    if (this.props.itemId !== prevProps.itemId) {
      this.updatedItem()
    }
  }

  updatedItem() {
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
    
     const { item, image } = this.state;

    if (!this.state.item) {
      return <span>Select peson from list</span>
    }


    const { name } = item;

    return (
      <div className="person-details card">
        <img className="person-image"
          src={image}  alt='characters'/>

        <div className="card-body">
          <h4>{name}</h4>
          <ul className="list-group list-group-flush">
            {
              React.Children.map(this.props.children, (child) => {
                return React.cloneElement(child, {item})
              })
           }
          </ul>
        </div>
      </div>
    )
  }
}






