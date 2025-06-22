import React from 'react';

import Counter from '@/components/ui/Counter';
import { IProductItemOption } from '@/interfaces/general.interface';
import useProduct from '@/stores/ProductProvider/useProduct';

import OptionItemLabel from '../OptionItemLabel';

interface IMultipleOptions {
  options: IProductItemOption[];
  groupId: string;
}

const MultipleOptions = ({ options, groupId }: IMultipleOptions) => {
  const { selectedOptions, setSelectedOptions } = useProduct();

  const getQuantity = (itemId: string) => {
    return (
      selectedOptions.find((item) => item.groupId === groupId && item.value === itemId)?.quantity ??
      0
    );
  };

  const handleChange = (itemId: string, newQuantity: number, price: number) => {
    const filtered = selectedOptions.filter(
      (item) => !(item.groupId === groupId && item.value === itemId)
    );

    if (newQuantity > 0) {
      setSelectedOptions([
        ...filtered,
        {
          groupId,
          value: itemId,
          quantity: newQuantity,
          price
        }
      ]);
      return;
    }

    setSelectedOptions([...filtered]);
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
