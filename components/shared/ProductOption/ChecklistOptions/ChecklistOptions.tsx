import React from 'react';

import Checklist from '@/components/ui/Checklist';
import { IOption, IProductItemOption, ISelectedOptions } from '@/interfaces/general.interface';
import useProduct from '@/stores/ProductProvider/useProduct';

import OptionItemLabel from '../OptionItemLabel';

interface IChecklistOptions {
  options: IProductItemOption[];
  maxSelection?: number;
  groupId: string;
  groupName: string;
}

const ChecklistOptions = ({
  options: checklistOptions,
  maxSelection,
  groupId,
  groupName
}: IChecklistOptions) => {
  const { product, setProduct } = useProduct();

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

  const selectedIds = product?.options
    ? product?.options.filter((item) => item.groupId === groupId).map((item) => item.value)
    : [];

  const handleChange = (newSelectedIds: string[]) => {
    const updatedSelected: ISelectedOptions[] = newSelectedIds.map((value) => {
      const option = checklistOptions.find((item) => item.value === value);
      return {
        groupId,
        groupName,
        value,
        name: option?.label || '',
        quantity: 1,
        price: option?.promotionPrice ?? option?.price ?? 0
      };
    });

    const filtered = product?.options
      ? product?.options.filter((item) => item.groupId !== groupId)
      : [];
    setProduct({
      ...product,
      options: [...filtered, ...updatedSelected]
    });
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
