import React from "react"

import ItemDetails from "../../item-details";
import Record from "../../record";
import { SwapiServiseConsumer } from '../../swapi-service-context'

const PersonDetails = ({itemId}) => {

  return (
    <SwapiServiseConsumer>
      {
        ({getPerson, getPersonImage}) => {
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
      }
    </SwapiServiseConsumer>
    
  )
}

const PlanetDetails = ({itemId}) => {

  return (
    <SwapiServiseConsumer>
      {
        ({ getPlanet, getPlanetImage}) => {
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
      }
   </SwapiServiseConsumer>
  )
}

const StarshipDetails = ({itemId}) => {

  return (
    <SwapiServiseConsumer>
      {({ getStarships, getStarshipImage}) => {
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
      }}
    </SwapiServiseConsumer>
  )
}

export {
  PersonDetails,
  PlanetDetails,
  StarshipDetails
}


