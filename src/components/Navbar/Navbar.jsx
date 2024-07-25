import React from 'react';
import styles from './Navbar.module.sass'
import logo_pari_match from '../../assets/logo.svg'

const Navbar = () => {
  return (
      <div className={styles.navbar}>
         <div className={styles.logo}>
             <img src={logo_pari_match} alt=""/>
         </div>
      </div>
  );
};

export default Navbar;