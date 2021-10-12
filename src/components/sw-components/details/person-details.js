import React from "react"

import ItemDetails from "../../item-details";
import Record from "../../record";
import { SwapiServiseConsumer } from '../../swapi-service-context'
import WithSwapiService from "../../hoc-helpers/with-swapi-service";




const PersonDetails = ({ itemId, swapiService }) => {
  const { getPerson, getPersonImage } = swapiService
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


export default WithSwapiService(PersonDetails)