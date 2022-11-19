import React from 'react';
import './ButtonUi.scss';

const ButtonUi = ({ children, className }) => {
  const styles = ['buttonUi'];

  if (className) {
    styles.push(className);
  }

  return <button className={styles.join(' ')}>{children}</button>;
};

export default ButtonUi;
