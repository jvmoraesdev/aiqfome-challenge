import React from 'react';
import { twMerge } from 'tailwind-merge';

interface ITextArea {
  value?: string;
  setValue: (value: string) => void;
  className: string;
  placeholder: string;
}

const TextArea = ({ value, setValue, className, placeholder }: ITextArea) => {
  const classes = twMerge(
    'rounded-[4px] border-dividers border-[1px] px-[12px] py-[10px] text-dark-secondary font-semibold w-full text-[14px] font-[600] outline-none break-words ',
    className
  );

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(event.target.value);
  };

  return (
    <textarea className={classes} value={value} onChange={handleChange} placeholder={placeholder} />
  );
};

export default TextArea;
