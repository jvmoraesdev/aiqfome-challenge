'use client';

import React from 'react';

import Card from '@/components/ui/Card';
import Text from '@/components/ui/Text';
import { IProductOption } from '@/interfaces/product.interface';

import ChecklistOptions from './ChecklistOptions';
import MultipleOptions from './MultipleOptions';
import RadioButtonOption from './RadioButtonOptions';

interface IProductOptionComponent {
  productOption: IProductOption;
}

const ProductOption = ({ productOption }: IProductOptionComponent) => {
  const { name, minQuantity, maxQuantity, items, id } = productOption;

  const type: 'radio' | 'checklist' | 'multiple' =
    minQuantity === 1 && maxQuantity === 1
      ? 'radio'
      : minQuantity === 0 && maxQuantity === 0
        ? 'multiple'
        : 'checklist';

  const options = items.map((item) => ({
    label: item.name,
    value: item.id,
    price: item.price,
    promotionPrice: item.promotionPrice
  }));

  return (
    <div className="bg-background flex flex-col gap-[16px] px-[16px] py-[16px]">
      <div className="flex justify-between">
        <div className="flex flex-col gap-[2px]">
          <Text className="text-dark-contrast text-[16px]">{name}</Text>

          {type === 'checklist' && minQuantity === 0 && (
            <Text className="text-dark-secondary text-[12px]">{`escolha até ${maxQuantity}`}</Text>
          )}
          {type === 'checklist' && minQuantity !== 0 && (
            <Text className="text-dark-secondary text-[12px]">{`escolha de ${minQuantity} a ${maxQuantity}`}</Text>
          )}
          {type === 'radio' && <Text className="text-dark-secondary text-[12px]">escolha 1</Text>}
          {type === 'multiple' && (
            <Text className="text-dark-secondary text-[12px]">escolha quantos quiser</Text>
          )}
        </div>

        {minQuantity >= 1 && (
          <Card className="text-background bg-dark-primary flex h-[28px] items-center justify-center rounded-[4px] p-[8px]">
            <Text className="text-background text-[12px]">obrigatório</Text>
          </Card>
        )}
      </div>

      <div className="flex flex-col gap-[12px]">
        {type === 'checklist' && (
          <ChecklistOptions groupId={id} options={options} maxSelection={maxQuantity} />
        )}

        {type === 'radio' && <RadioButtonOption groupId={id} options={options} />}

        {type === 'multiple' && <MultipleOptions groupId={id} options={options} />}
      </div>
    </div>
  );
};

export default ProductOption;
