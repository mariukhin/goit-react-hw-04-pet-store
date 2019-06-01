import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => (
  <ul>
    <li>
      <NavLink to="/" exact>
        Home
      </NavLink>
    </li>
    <li>
      <NavLink to="/pets">Pets</NavLink>
    </li>
    <li>
      <NavLink to="/about">About</NavLink>
    </li>
  </ul>
);

export default Nav;
