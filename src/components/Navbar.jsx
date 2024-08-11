import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './Navbar.module.scss';

const Navbar = () => {
  return (
    <nav className={styles.Navbar}>
      <ul>
        <li>
          <NavLink to={'/about'} style={{ textDecoration: 'none' }}>
            <span>About Us</span>
          </NavLink>
        </li>
        <li>
          <NavLink to={'/impact'} style={{ textDecoration: 'none' }}>
            <span>Projects</span>
          </NavLink>
        </li>
        <li>
          <NavLink to={'/locatin'} style={{ textDecoration: 'none' }}>
            <span>Impact</span>
          </NavLink>
        </li>
        <li>
          <NavLink to={'/projects'} style={{ textDecoration: 'none' }}>
            <span>Locations</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
