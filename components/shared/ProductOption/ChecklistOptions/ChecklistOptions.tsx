import React from 'react';

import Checklist from '@/components/ui/Checklist';
import { IOption, IProductItemOption, ISelectedOptions } from '@/interfaces/general.interface';

import OptionItemLabel from '../OptionItemLabel';

interface IChecklistOptions {
  options: IProductItemOption[];
  selectedValues: ISelectedOptions[];
  onChange: (selectedValues: ISelectedOptions[]) => void;
  maxSelection?: number;
}

const ChecklistOptions = ({
  options: checklistOptions,
  selectedValues,
  onChange,
  maxSelection
}: IChecklistOptions) => {
  const options: IOption[] = checklistOptions.map((checklistOption) => {
    return {
      value: checklistOption.value,
      label: (
        <OptionItemLabel
          label={checklistOption.label}
          price={checklistOption.price}
          promotionPrice={checklistOption.promotionPrice}
        />
      )
    };
  });

  const selectedIds = selectedValues.map((item) => item.value);

  const handleChange = (newSelectedIds: string[]) => {
    const updatedSelected: ISelectedOptions[] = newSelectedIds.map((value) => {
      const option = checklistOptions.find((item) => item.value === value);
      return {
        value,
        quantity: 1,
        price: option?.promotionPrice ?? option?.price ?? 0
      };
    });

    onChange(updatedSelected);
  };

  return (
    <Checklist
      options={options}
      maxSelection={maxSelection}
      onChange={handleChange}
      selectedValues={selectedIds}
    />
  );
};

export default ChecklistOptions;
