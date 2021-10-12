import React from "react";

import { SwapiServiseConsumer } from '../swapi-service-context'



const WithSwapiService = (Wrapped) => {

  return ((props) => {
    return (
      <SwapiServiseConsumer>
        {
          (swapiService) => {
            <Wrapped {...props} swapiService={swapiService} />
          }
        }
      </SwapiServiseConsumer>
    )
  })
}

export default WithSwapiService