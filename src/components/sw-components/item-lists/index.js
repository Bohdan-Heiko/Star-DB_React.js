import React from 'react'

import ItemList from '../../item-list'
import withData from '../../hoc-helpers'
import SwapiServise from "../../../service/swapi-service"

const swapiService = new SwapiServise()

const {
  getAllPeople,
  getAllStarships,
  getAllPlanets
} = swapiService;

const withChildFunction = (Wrapped, fn) => {
  return ((props) => {
    return (
      <Wrapped {...props}>
        {fn}
      </Wrapped>
    )
  })
}

// const listWithChildren = withChildFunction(
//   ItemList,
//   ({name}) => <span>{name}</span>
//   // renderName
// )

const renderName = ({ name }) => (<span>{name}</span>)
const renderModelAndName = ({model, name}) => (<span>{name} ({model})</span>)

const PersonList = withData(withChildFunction(ItemList, renderName), getAllPeople)
const PlanetList = withData(withChildFunction(ItemList, renderName), getAllPlanets)
const StarshipList = withData(withChildFunction(ItemList, renderModelAndName), getAllStarships)

export {
  PersonList,
  PlanetList,
  StarshipList
}


