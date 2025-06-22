import React from 'react';

import { IOption } from '@/interfaces/general.interface';

interface IRadioButton {
  options: IOption[];
  selectedValue: string | null;
  onChange: (value: string) => void;
}

const RadioButton = ({ options, selectedValue, onChange }: IRadioButton) => {
  const handleChange = (value: string) => {
    onChange(value);
  };

  return (
    <div className="flex flex-col gap-[12px]">
      {options.map((option) => (
        <label key={option.value} className="flex cursor-pointer items-center gap-[8px]">
          <input
            type="radio"
            name={`radio-group-${option.value}`}
            value={option.value}
            checked={selectedValue === option.value}
            onChange={() => handleChange(option.value)}
            className="accent-success h-[16px] w-[16px]"
          />
          <span className="text-dark-secondary w-[100%] text-[14px] font-normal">
            {option.label}
          </span>
        </label>
      ))}
    </div>
  );
};

export default RadioButton;
