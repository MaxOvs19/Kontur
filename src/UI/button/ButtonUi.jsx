import React from 'react';
import './ButtonUi.scss';

const ButtonUi = ({ children, className, ...props }) => {
  const styles = ['buttonUi'];

  if (className) {
    styles.push(className);
  }

  return (
    <button {...props} className={styles.join(' ')}>
      {children}
    </button>
  );
};

export default ButtonUi;
