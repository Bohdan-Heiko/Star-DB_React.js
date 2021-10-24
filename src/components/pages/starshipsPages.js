import React from 'react';
import { StarshipList } from '../sw-components/item-lists';
import {withRouter} from 'react-router-dom'

const StarshipPages = ({history}) => {

  return (
    <StarshipList itemSelected={(itemId) => {
      history.push(`/starships/${itemId}`)
    }} />
  )
}

export default withRouter(StarshipPages)
