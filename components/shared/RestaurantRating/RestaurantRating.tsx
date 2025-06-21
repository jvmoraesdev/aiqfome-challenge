'use client';

import { ChevronRight, Star } from 'lucide-react';
import React from 'react';

import Button from '@/components/ui/Button';
import COLORS from '@/components/ui/Colors';
import Text from '@/components/ui/Text';

interface IRestaurantRating {
  isComplete?: boolean;
  rate: number;
  action?: () => void;
}

const RestaurantRating = ({ isComplete = false, rate, action }: IRestaurantRating) => {
  const size = isComplete ? 12 : 14;
  const gap = isComplete ? 'gap-[4px]' : 'w-[2px]';

  return (
    <div className={`flex flex-row items-center ${gap} w-fit`}>
      <Star size={size} color="#FFB300" fill="#FFB300" />
      <Button action={action}>
        <Text className={`text-[${size}px] text-dark-secondary`}>
          {isComplete ? (
            <div className="flex items-center gap-[4px]">
              {`${rate} de 5`}
              <ChevronRight size={8} color={COLORS['text-dark-secondary']} />
            </div>
          ) : (
            rate
          )}
        </Text>
      </Button>
    </div>
  );
};

export default RestaurantRating;
