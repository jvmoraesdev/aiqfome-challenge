import React, { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

interface ICard {
  className?: string;
  children: ReactNode;
}

const Card = ({ className, children }: ICard) => {
  const classes = twMerge(
    'border-border-light bg-foreground rounded-[8px] b border-1 overflow-hidden',
    className
  );

  return <div className={classes}>{children}</div>;
};

export default Card;
