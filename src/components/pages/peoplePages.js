import React from 'react';
import {useHistory, useRouteMatch} from 'react-router-dom'
import Row from '../row';
import PersonDetails from '../sw-components/details/person-details';
import { PersonList } from '../sw-components/item-lists';


const PeoplePages = () => {
  const history = useHistory()
  const match = useRouteMatch()
  const {id} = match.params

  return (
    <Row
      left={<PersonList itemSelected={(id) => history.push(id)}/>}
      right={<PersonDetails itemId={id} />}
    />
  )
}

export default PeoplePages