import React from "react"

import ItemDetails from "../../item-details";
import Record from "../../record";
import { SwapiServiseConsumer } from '../../swapi-service-context'





const PlanetDetails = ({ itemId }) => {

  return (
    <SwapiServiseConsumer>
      {
        ({ getPlanet, getPlanetImage }) => {
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


export default PlanetDetails