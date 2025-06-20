'use client';

import classNames from 'classnames';
import React, { ReactNode } from 'react';

interface IButton {
  children: ReactNode;
  action?: () => void;
  className?: string;
}

const Button = ({ children, action, className }: IButton) => {
  const classes = classNames(`flex ${action ? 'cursor-pointer' : 'cursor-default'}`, className);

  return (
    <button className={classes} onClick={action}>
      {children}
    </button>
  );
};

export default Button;
