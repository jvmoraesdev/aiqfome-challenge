import classNames from 'classnames';
import React, { ReactNode } from 'react';

interface ICard {
  className?: string;
  children: ReactNode;
}

const Card = ({ className, children }: ICard) => {
  const classes = classNames(
    'border-border-light rounded-[8px] border-1 bg-foreground overflow-hidden',
    className
  );

  return <div className={classes}>{children}</div>;
};

export default Card;
