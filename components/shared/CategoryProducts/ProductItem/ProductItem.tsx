import { CircleDollarSign } from 'lucide-react';
import React from 'react';

import Text from '@/components/ui/Text';
import { IProduct } from '@/interfaces/product.interface';
import SpicyIcon from '@/public/spicyIcon.svg';
import VegetarianIcon from '@/public/vegetarianIcon.svg';

interface IProductItem {
  product: Omit<IProduct, 'options' | 'image' | 'categoryId' | 'restaurantId'>;
}

const ProductItem = ({ product }: IProductItem) => {
  const { name, description, price, promotionPrice, isAvailable, tags, isIncreasable } = product;

  return (
    <div className={`flex justify-between gap-[16px] pl-[8px] ${isAvailable ? '' : 'opacity-45'}`}>
      <div className="flex flex-3/4 flex-col gap-[2px]">
        <Text
          className={`text-dark-contrast flex gap-[4px] text-[14px] font-semibold ${isAvailable ? '' : 'line-through'}`}
        >
          {name}
          {tags?.includes('vegetarian') && <VegetarianIcon />}
          {tags?.includes('spicy') && <SpicyIcon />}
        </Text>
        {description && (
          <Text className="text-dark-secondary w-[95%] text-[12px] font-normal break-words">
            {description}
          </Text>
        )}
      </div>
      <div className="flex flex-1/4 flex-col items-end justify-start gap-[2px]">
        {promotionPrice ? (
          <>
            <Text className="text-dark-secondary text-[12px] line-through">
              {`R$ ${price.toFixed(2)}`}
            </Text>
            <Text className="text-success-secondary flex items-center text-[14px]">
              <CircleDollarSign size={12} />
              {`R$ ${promotionPrice.toFixed(2)}`}
            </Text>
          </>
        ) : (
          <>
            {isIncreasable && <Text className="text-dark-secondary text-[12px]">a partir de</Text>}
            <Text className="text-primary text-[14px]">{`R$ ${price.toFixed(2)}`}</Text>
          </>
        )}
      </div>
    </div>
  );
};

export default ProductItem;
