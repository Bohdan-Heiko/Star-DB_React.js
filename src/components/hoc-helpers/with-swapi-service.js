import React from "react";

import { SwapiServiseConsumer } from '../swapi-service-context'



const WithSwapiService = (mapMethodToProps) => (Wrapped) => {

  return ((props) => {
    return (
      <SwapiServiseConsumer>
        {
          (swapiService) => {
            const serviceProps = mapMethodToProps(swapiService);
            return (
              <Wrapped {...props} {...serviceProps} />
            )
          }
        }
      </SwapiServiseConsumer>
    )
  })
}

export default WithSwapiService