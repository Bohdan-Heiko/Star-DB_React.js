import React from 'react';
import './item-list.css';

import withData from '../hoc-helpers'
import SwapiService from '../../service/swapi-service';
import PropTypes from 'prop-types'

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

ItemList.defaultProps = {
  itemSelected: () => {}
}

ItemList.propTypes = {
  itemSelected: PropTypes.func,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  children: PropTypes.func.isRequired
}

const {getAllPeople} = new SwapiService()

export default withData(ItemList, getAllPeople);