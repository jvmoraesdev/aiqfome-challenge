import React from 'react';

import Text from '@/components/ui/Text';
import { ISelectedOptions } from '@/interfaces/general.interface';

interface IOrderItemOptionReview {
  groupId: string;
  optionsInGroup: ISelectedOptions[];
  id: string;
}

const OrderItemOptionReview = ({ groupId, optionsInGroup, id }: IOrderItemOptionReview) => {
  return (
    <div className="flex flex-col">
      <div className="flex">
        <Text className="text-dark-secondary text-[12px]">•</Text>
        <Text className="text-dark-secondary flex gap-[4px] pl-[4px] text-[12px]">{groupId}</Text>
      </div>
      {optionsInGroup.map((option, optionIndex) => (
        <div className="flex gap-[12px]" key={`${id}-${optionIndex}`}>
          <Text className="text-dark-secondary flex pl-[11px] text-[12px] font-semibold">
            {option.name}
          </Text>
          {option.price !== 0 && (
            <Text className="text-success flex text-[12px]">+R$ {option.price}</Text>
          )}
        </div>
      ))}
    </div>
  );
};

export default OrderItemOptionReview;
