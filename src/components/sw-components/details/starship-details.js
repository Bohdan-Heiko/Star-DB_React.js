import React from "react"

import ItemDetails from "../../item-details";
import Record from "../../record";
// import { SwapiServiseConsumer } from '../../swapi-service-context'
import WithSwapiService from '../../hoc-helpers/with-swapi-service'


const StarshipDetails = (props) => {
   
  return (
    <ItemDetails {...props}>
      <Record field='model' label='Model' />
      <Record field='length' label='Length' />
      <Record field='cost_in_credits' label='Cost' />
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