import { HeartCrack } from 'lucide-react';
import React from 'react';

import COLORS from '@/components/ui/Colors';
import Text from '@/components/ui/Text';

const FallbackRestaurantItems = () => {
  return (
    <div className="flex h-[200px] w-full flex-col items-center justify-center gap-[16px]">
      <HeartCrack color={COLORS['text-dark-secondary']} size={80} strokeWidth={1} />
      <Text className="text-dark-secondary text-center">
        ops... parece que o restaurante não cadastrou nenhum item
      </Text>
    </div>
  );
};

export default FallbackRestaurantItems;
