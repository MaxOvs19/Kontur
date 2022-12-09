import React from 'react';

import { IbuttonUi } from './button-ui.props';
import './button-ui.scss';

const ButtonUi = ({ children, classNameAdd, ...props }:IbuttonUi) => {
  const styles = ['buttonUi'];

  if (classNameAdd) {
    styles.push(classNameAdd);
  }

  return (
    <button {...props} className={styles.join(' ')} >
      {children}
    </button>
  );
};

export default ButtonUi;
