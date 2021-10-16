import React from "react"

import ItemDetails from "../../item-details";
import Record from "../../record";
// import { SwapiServiseConsumer } from '../../swapi-service-context'
import WithSwapiService  from '../../hoc-helpers/with-swapi-service'


const PlanetDetails = (props) => {
  return (
    <ItemDetails {...props}>
      <Record field='population' label='Population' />
      <Record field='rotationperiod' label='Rotationperiod' />
      <Record field='diameter' label='Diameter' />
    </ItemDetails>
  )
}

const MapMethodToProps = (swapiService) => {

  return {
    getData: swapiService.getPlanet,
    getImageUrl: swapiService.getPlanetImage
  }
}

export default WithSwapiService(PlanetDetails, MapMethodToProps)