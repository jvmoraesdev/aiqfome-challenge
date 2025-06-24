import React, { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

interface IText {
  children: ReactNode;
  className?: string;
  size?: 'h1' | 'h2' | 'h3' | 'h4' | '';
}

const Text = ({ children, size, className }: IText) => {
  const classes = twMerge('font-bold', className);

  if (size === 'h1') return <h1 className={classes}>{children}</h1>;
  if (size === 'h2') return <h2 className={classes}>{children}</h2>;
  if (size === 'h3') return <h3 className={classes}>{children}</h3>;
  if (size === 'h4') return <h4 className={classes}>{children}</h4>;

  return <span className={classes}>{children}</span>;
};

export default Text;
