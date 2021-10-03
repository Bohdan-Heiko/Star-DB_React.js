import React from "react"

import SwapiServise from "../../../service/swapi-service";
import ItemDetails from "../../item-details";
import Record from "../../record";

const {
  getPerson,
  getPlanet,
  getStarships,
  getPersonImage,
  getPlanetImage,
  getStarshipImage
} = new SwapiServise()

const PersonDetails = ({itemId}) => {

  return (
    <ItemDetails
      itemId={itemId}
      getData={getPerson}
      getImageUrl={getPersonImage}
    >
      <Record field='gender' label='gender' />
      <Record field='eyeColor' label='Eye Color' />
    </ItemDetails>
  )
}

const PlanetDetails = ({itemId}) => {

  return (
    <ItemDetails
      itemId={itemId}
      getData={getPlanet}
      getImageUrl={getPlanetImage}
    >
      <Record field='population' label='Population' />
      <Record field='rotationperiod' label='Rotationperiod' />
      <Record field='diameter' label='Diameter' />
    </ItemDetails>
  )
}

const StarshipDetails = ({itemId}) => {

  return (
    <ItemDetails
      itemId={itemId}
      getData={getStarships}
      getImageUrl={getStarshipImage}
    >
      <Record field='model' label='Model' />
      <Record field='length' label='Length' />
      <Record field='cost_in_credits' label='Cost' />
    </ItemDetails>
  )
}

export {
  PersonDetails,
  PlanetDetails,
  StarshipDetails
}


