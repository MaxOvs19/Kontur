import React from 'react'

import { IButton } from './button.props'
import './button.scss'

const Button = ({
  children,
  disabled,
  className,
  onClick,
  ...props
}: IButton) => {
  const styles = ['button']

  if (className) {
    styles.push(className)
  }

  return (
    <button
      {...props}
      className={styles.join(' ')}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  )
}

export default Button
