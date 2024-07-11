import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.scss';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navList}>
        <li className={styles.navItem}><Link className={styles.navLink} to="/">Home</Link></li>
        <li className={styles.navItem}><Link className={styles.navLink} to="/products">Products</Link></li>
        <li className={styles.navItem}><Link className={styles.navLink} to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
