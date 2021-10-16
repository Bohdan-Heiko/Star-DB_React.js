import React from 'react'

import ItemList from '../../item-list'
import withData from '../../hoc-helpers'
import WithSwapiService from '../../hoc-helpers/with-swapi-service'

  
const withChildFunction = (Wrapped, fn) => {
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


const PersonList = WithSwapiService(withData(withChildFunction(ItemList, renderName)), MapPersonMethodToProps)
const PlanetList = WithSwapiService(withData(withChildFunction(ItemList, renderName)), MapPlanteMethodToProps)
const StarshipList = WithSwapiService(withData(withChildFunction(ItemList, renderModelAndName)), MapStarshipMethodToProps)

export {
  PersonList,
  PlanetList,
  StarshipList
}


