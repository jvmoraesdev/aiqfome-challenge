import React from 'react';

import Counter from '@/components/ui/Counter';
import { IProductItemOption, ISelectedOptions } from '@/interfaces/general.interface';

import OptionItemLabel from '../OptionItemLabel';

interface IMultipleOptions {
  options: IProductItemOption[];
  selectedValues: ISelectedOptions[];
  onChange: (selectedValues: ISelectedOptions[]) => void;
}

const MultipleOptions = ({ options, selectedValues, onChange }: IMultipleOptions) => {
  const getQuantity = (itemId: string) =>
    selectedValues.find((item) => item.value === itemId)?.quantity ?? 0;

  const handleChange = (itemId: string, newQuantity: number, price: number) => {
    const updated = selectedValues.filter((item) => item.value !== itemId);

    if (newQuantity > 0) {
      updated.push({
        value: itemId,
        quantity: newQuantity,
        price
      });
    }

    onChange(updated);
  };

  return (
    <div className="flex flex-col gap-[12px]">
      {options.map((option) => {
        const quantity = getQuantity(option.value);

        return (
          <div className="flex items-center gap-[8px]" key={option.value}>
            <Counter
              value={quantity}
              setValue={(newQty) =>
                handleChange(option.value, newQty, option.promotionPrice ?? option.price ?? 0)
              }
            />

            <OptionItemLabel
              label={option.label}
              price={option.price}
              promotionPrice={option.promotionPrice}
            />
          </div>
        );
      })}
    </div>
  );
};

export default MultipleOptions;
