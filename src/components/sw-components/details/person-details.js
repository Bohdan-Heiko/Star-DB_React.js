import React from "react"

import ItemDetails from "../../item-details";
import Record from "../../record";
import WithSwapiService from "../../hoc-helpers/with-swapi-service";




const PersonDetails = (props) => {
  return (
    <ItemDetails {...props}>
      <Record field='gender' label='gender' />
      <Record field='eyeColor' label='Eye Color' />
    </ItemDetails>
  )
}

const MapMethodToProps = (swapiService) => {

  return {
    getData: swapiService.getPerson,
    getImageUrl: swapiService.getPersonImage
  }
}


export default WithSwapiService(PersonDetails, MapMethodToProps)