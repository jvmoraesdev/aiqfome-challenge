'use client';

import React, { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

interface IButton {
  disabled?: boolean;
  children: ReactNode;
  action?: () => void;
  className?: string;
}

const Button = ({ children, disabled = false, action, className }: IButton) => {
  const classes = twMerge(
    `flex ${disabled ? 'opacity-45' : ''} ${action && !disabled ? 'cursor-pointer' : 'cursor-default'}`,
    className
  );

  return (
    <button className={classes} onClick={!disabled ? action : () => {}}>
      {children}
    </button>
  );
};

export default Button;
