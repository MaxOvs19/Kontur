import React from 'react';
import './menu-burger.scss';

const MenuBurger = ({...props}) => {
  return (
    <div className="menu-btn" {...props}>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};

export default MenuBurger;
