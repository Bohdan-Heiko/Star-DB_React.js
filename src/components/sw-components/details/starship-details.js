import React from "react"
import './style/style.css'

import ItemDetails from "../../item-details";
import Record from "../../record";
import WithSwapiService from '../../hoc-helpers/with-swapi-service'
import {useHistory} from 'react-router-dom'


const StarshipDetails = (props) => {
  const history = useHistory()
   
  return (
    <ItemDetails {...props}>
      <Record field='model' label='Model' />
      <Record field='length' label='Length' />
      <Record field='cost_in_credits' label='Cost' />

      <button
        className='btn btn-primary btn-small bt-sm'
        onClick={() => {
          history.push('/starships')
        }}>Go to Starship page</button>
      
    </ItemDetails>
  )
    
}


const MapMethodToProps = (swapiService) => {

  return {
    getData: swapiService.getStarships,
    getImageUrl: swapiService.getStarshipImage
  }
}


export default WithSwapiService(MapMethodToProps)(StarshipDetails)