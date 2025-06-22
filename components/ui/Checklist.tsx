import React from 'react';

import { IOption } from '@/interfaces/general.interface';

interface IChecklist {
  options: IOption[];
  selectedValues: string[];
  onChange: (selectedValues: string[]) => void;
  maxSelection?: number;
}

const Checklist = ({ options, selectedValues, onChange, maxSelection }: IChecklist) => {
  const handleToggle = (value: string) => {
    const isSelected = selectedValues.includes(value);
    let newSelected: string[];

    if (isSelected) {
      newSelected = selectedValues.filter((v) => v !== value);
    } else {
      if (maxSelection && selectedValues.length >= maxSelection) return;
      newSelected = [...selectedValues, value];
    }

    onChange(newSelected);
  };

  const isDisabled = (value: string) => {
    return (
      maxSelection !== undefined &&
      selectedValues.length >= maxSelection &&
      !selectedValues.includes(value)
    );
  };

  return (
    <div className="flex flex-col gap-[12px]">
      {options.map((option) => (
        <label
          key={option.value}
          className={`flex cursor-pointer items-center gap-[8px] ${
            isDisabled(option.value) ? 'cursor-not-allowed opacity-50' : ''
          }`}
        >
          <input
            type="checkbox"
            checked={selectedValues.includes(option.value)}
            onChange={() => handleToggle(option.value)}
            disabled={isDisabled(option.value)}
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

export default Checklist;
