import React from 'react';

import './header.css';

const Header = ({changeData}) => {
  return (
    <div className="header d-flex">
      <h3>
        <a href="#">
          Star DB
        </a>
      </h3>
      <ul className="d-flex">
        <li>
          <a href="#">People</a>
        </li>
        <li>
          <a href="#">Planets</a>
        </li>
        <li>
          <a href="#">Starships</a>
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