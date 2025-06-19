'use client';

import clsx from 'clsx';
import React, { ReactNode } from 'react';

interface IButton {
  children: ReactNode;
  action: () => void;
  className?: string;
}

const Button = ({ children, action, className }: IButton) => {
  const classes = clsx('flex', className);

  return (
    <button className={classes} onClick={action}>
      {children}
    </button>
  );
};

export default Button;
