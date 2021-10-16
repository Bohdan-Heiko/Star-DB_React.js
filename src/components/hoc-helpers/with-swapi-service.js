import React from "react";

import { SwapiServiseConsumer } from '../swapi-service-context'



const WithSwapiService = (Wrapped, mapMethodToProps) => {

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