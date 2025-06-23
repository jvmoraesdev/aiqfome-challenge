import React from 'react';

import RadioButton from '@/components/ui/RadioButton';
import { IOption, IProductItemOption } from '@/interfaces/general.interface';
import useProduct from '@/stores/ProductProvider/useProduct';

import OptionItemLabel from '../OptionItemLabel';

interface IRadioButtonOptions {
  groupId: string;
  groupName: string;
  options: IProductItemOption[];
}

const RadioButtonOption = ({ groupId, groupName, options: radioOptions }: IRadioButtonOptions) => {
  const { setSelectedOptions, selectedOptions } = useProduct();

  const handleChange = (value: string) => {
    const option = radioOptions.find((item) => item.value === value);
    const filtered = selectedOptions.filter((item) => item.groupId !== groupId);

    setSelectedOptions([
      ...filtered,
      {
        groupId,
        groupName,
        value,
        name: option?.label || '',
        quantity: 1,
        price: option?.promotionPrice ?? option?.price ?? 0
      }
    ]);
  };

  const selectedValue = selectedOptions.find((item) => item.groupId === groupId)?.value || null;

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
