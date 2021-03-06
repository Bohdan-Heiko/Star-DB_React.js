import React from 'react';
import { Link } from 'react-router-dom';

import './header.css';

const Header = ({changeData}) => {
  return (
    <div className="header d-flex">
      <h3>
       <Link to='/'>
          Star DB
        </Link>
      </h3>
      <ul className="d-flex">
        <li>
          <Link to='/people/'>People</Link>
        </li>
        <li>
        <Link to='/planets/'>Planets</Link>
        </li>
        <li>
          <Link to='/starships/'>Starships</Link>
        </li>
      </ul>
      <button
        onClick={changeData}
        className='btn btn-primary btn-small'
      >Change DATA</button>
    </div>
  );
};

export default Header;