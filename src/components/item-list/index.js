import React from 'react';
import './item-list.css';

import withData from '../hoc-helpers'
import SwapiService from '../../service/swapi-service';

const ItemList = (props) => {

  const { data, itemSelected, children: renderLabel } = props;

  const items = data.map((item) => {
    const { id } = item;
    
    const label = renderLabel(item)

    return (
      <li className="list-group-item"
        key={id}
        onClick={() => itemSelected(id)}>
        {label}
      </li>
    )
  })

  return (
    <ul className="item-list list-group">
      {items}
    </ul>
  );
};

const {getAllPeople} = new SwapiService()

export default withData(ItemList, getAllPeople);