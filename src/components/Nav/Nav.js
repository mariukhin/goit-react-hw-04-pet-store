import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Nav.module.css';

const Nav = () => (
  <ul className={styles.navList}>
    <li className={styles.navListItem}>
      <NavLink className={styles.link} to="/" exact>
        Home
      </NavLink>
    </li>
    <li className={styles.navListItem}>
      <NavLink className={styles.link} to="/pets">
        Pets
      </NavLink>
    </li>
    <li className={styles.navListItem}>
      <NavLink className={styles.link} to="/about">
        About
      </NavLink>
    </li>
  </ul>
);

export default Nav;
