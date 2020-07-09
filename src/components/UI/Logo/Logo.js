import React from 'react';
import classes from './Logo.module.css';
import BurgerLogo from '../../../assets/images/burger-logo.png';

const logo = (props) => {
  return (
    <div
      className={classes.Logo}
      style={{ height: props.height, marginBottom: props.marginBottom }}
    >
      <img src={BurgerLogo} alt="logo" />
    </div>
  );
};

export default logo;
