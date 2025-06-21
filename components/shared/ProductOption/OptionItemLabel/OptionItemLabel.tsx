import { CircleDollarSign } from 'lucide-react';
import React from 'react';

import COLORS from '@/components/ui/Colors';
import Text from '@/components/ui/Text';
import { formatDecimal } from '@/utils/functions';

interface IOptionItemLabel {
  promotionPrice?: number;
  price?: number;
  label: string;
}

const OptionItemLabel = ({ promotionPrice, price, label }: IOptionItemLabel) => {
  return (
    <div className="flex w-full items-center justify-between">
      <Text className="text-dark-secondary flex items-center gap-[4px] text-[14px] font-semibold">
        {promotionPrice && (
          <CircleDollarSign strokeWidth={1.5} size={24} color={COLORS['success-secondary']} />
        )}
        {label}
      </Text>
      {price &&
        (promotionPrice ? (
          <div className="flex items-center gap-[4px] text-[12px]">
            <Text className="text-dark-secondary center text-[12px]">{`de R$ ${formatDecimal(price, 2)} por `}</Text>
            <Text className="text-success-secondary text-[14px]">{` R$ ${formatDecimal(promotionPrice, 2)}`}</Text>
          </div>
        ) : (
          <Text className="text-primary text-[14px]">{`R$ ${formatDecimal(price, 2)}`}</Text>
        ))}
    </div>
  );
};

export default OptionItemLabel;
