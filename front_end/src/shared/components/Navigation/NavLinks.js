import React from 'react';
import {NavLink} from 'react-router-dom';

import './NavLinks.css';

const NavLinks = props => {
  return <ul className='nav-links'>
      <li>
          <NavLink to='/' exact>All Users</NavLink>
      </li>
      <li>
          <NavLink to='/friends'>My Friends</NavLink>
      </li>
  </ul>
};

export default NavLinks;
