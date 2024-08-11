import React from 'react';

import { Link } from 'react-router-dom';

import Logo from '/Logo.svg';

import styles from './Header.module.scss';
import Navbar from './Navbar';

const Header = () => {
  return (
    <header>
      <div className={styles.Header_container}>
        <div className={styles.Header_content}>
          <Link
            to={'/'}
            className={styles.Link}
            style={{ textDecoration: 'none' }}
          >
            <div className={styles.Logo}>
              <img src={Logo} alt='Logo' />
              <p>Waterdrop</p>
            </div>
          </Link>

          <Navbar />

          <div className={styles.buttons_box}>
            <button className={styles.signIn_btns}>Sign In</button>
            <button className={styles.SignUp_btn}>Sign Up</button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
