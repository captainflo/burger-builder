import React from 'react';
import classes from './Toolbar.module.css';
import Logo from '../../UI/Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';

const toolbar = () => {
  return (
    <header className={classes.Toolbar}>
      <div>Menu</div>
      <Logo height="80%" />
      <nav className={classes.DesktopOnly}>
        <NavigationItems />
      </nav>
    </header>
  );
};

export default toolbar;
