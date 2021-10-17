import React from 'react'

import ItemList from '../../item-list'
import withData from '../../hoc-helpers'
import WithSwapiService from '../../hoc-helpers/with-swapi-service'

  
const withChildFunction = (fn) => (Wrapped) => {
  return ((props) => {
    return (
      <Wrapped {...props}>
        {fn}
      </Wrapped>
    )
  })
}

const renderName = ({ name }) => (<span>{name}</span>)
const renderModelAndName = ({ model, name }) => (<span>{name} ({model})</span>)

const MapPersonMethodToProps = (swapiService) => {
  return {getData: swapiService.getAllPeople}
}
const MapPlanteMethodToProps = (swapiService) => {
  return { getData: swapiService.getAllPlanets }
}
const MapStarshipMethodToProps = (swapiService) => {
  return { getData: swapiService.getAllStarships }
}


const PersonList = WithSwapiService(MapPersonMethodToProps)(withData(withChildFunction(renderName)(ItemList)))
const PlanetList = WithSwapiService(MapPlanteMethodToProps)(withData(withChildFunction(renderName)(ItemList)))
const StarshipList = WithSwapiService(MapStarshipMethodToProps)(withData(withChildFunction(renderModelAndName)(ItemList)))

export {
  PersonList,
  PlanetList,
  StarshipList
}


