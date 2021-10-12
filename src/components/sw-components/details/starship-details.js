import React from "react"

import ItemDetails from "../../item-details";
import Record from "../../record";
import { SwapiServiseConsumer } from '../../swapi-service-context'





 const StarshipDetails = ({ itemId }) => {

  return (
    <SwapiServiseConsumer>
      {({ getStarships, getStarshipImage }) => {
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


export default StarshipDetails