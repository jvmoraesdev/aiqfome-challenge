import React from 'react';
import { twMerge } from 'tailwind-merge';

export interface IInput {
  value: string;
  setValue: (value: string) => void;
  className?: string;
  type?: string;
  placeholder?: string;
}

const Input = ({ value, setValue, className, placeholder, type }: IInput) => {
  const classes = twMerge(
    'text-dark-secondary w-full text-[14px] font-[600] outline-none break-words ',
    className
  );

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <input
      value={value}
      onChange={handleChange}
      className={classes}
      type={type}
      placeholder={placeholder}
    />
  );
};

export default Input;
