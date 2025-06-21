import React from 'react';

import RadioButton from '@/components/ui/RadioButton';
import { IOption, IProductItemOption, ISelectedOptions } from '@/interfaces/general.interface';

import OptionItemLabel from '../OptionItemLabel';

interface IRadioButtonOptions {
  options: IProductItemOption[];
  selectedValue: string | null;
  onChange: (value: ISelectedOptions[]) => void;
}

const RadioButtonOption = ({
  options: radioOptions,
  selectedValue,
  onChange
}: IRadioButtonOptions) => {
  const handleChange = (value: string) => {
    const option = radioOptions.find((item) => item.value === value);

    onChange([
      {
        value,
        quantity: 1,
        price: option?.promotionPrice ?? option?.price ?? 0
      }
    ]);
  };

  const options: IOption[] = radioOptions.map((radioOption) => {
    return {
      value: radioOption.value,
      label: (
        <OptionItemLabel
          label={radioOption.label}
          price={radioOption.price}
          promotionPrice={radioOption.promotionPrice}
        />
      )
    };
  });

  return <RadioButton selectedValue={selectedValue} onChange={handleChange} options={options} />;
};

export default RadioButtonOption;
