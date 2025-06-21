import { CircleDollarSign } from 'lucide-react';
import React from 'react';

import COLORS from '@/components/ui/Colors';
import Text from '@/components/ui/Text';

interface ICategoryDeatils {
  hasDiscount: boolean;
  name: string;
  description?: string;
}

const CategoryDetails = ({ hasDiscount, name, description }: ICategoryDeatils) => {
  return (
    <div className="flex flex-col gap-[4px]">
      <Text className="text-dark-contrast flex gap-[4px] text-[16px]">
        {name}
        {hasDiscount && (
          <CircleDollarSign strokeWidth={1.5} size={24} color={COLORS['success-secondary']} />
        )}
      </Text>
      {description && (
        <Text className="text-dark-secondary w-[95%] text-[12px] font-semibold break-words">
          {description}
        </Text>
      )}
    </div>
  );
};

export default CategoryDetails;
