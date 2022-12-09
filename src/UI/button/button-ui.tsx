import React from 'react';

import { IbuttonUi } from './button-ui.props';
import './button-ui.scss';

const ButtonUi = ({ children, disabledBtn, classNameAdd, onClickBtn, ...props }:IbuttonUi) => {
  const styles = ['buttonUi'];

  if (classNameAdd) {
    styles.push(classNameAdd);
  }

  return (
    <button {...props} className={styles.join(' ')} onClick={onClickBtn} disabled={disabledBtn}>
      {children}
    </button>
  );
};

export default ButtonUi;
