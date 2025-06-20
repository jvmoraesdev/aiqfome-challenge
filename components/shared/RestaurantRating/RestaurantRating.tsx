'use client';

import { ChevronRight, Star } from 'lucide-react';
import React from 'react';

import Button from '@/components/ui/Button';
import Text from '@/components/ui/Text';

interface IRestaurantRating {
  isComplete?: boolean;
  rate: number;
  action?: () => void;
}

const RestaurantRating = ({ isComplete = false, rate, action }: IRestaurantRating) => {
  const size = isComplete ? 12 : 14;
  const width = isComplete ? 'w-[81px]' : 'w-[47px]';

  return (
    <div className={`flex w-[81px] flex-row items-center gap-[2px] ${width}`}>
      <Star size={size} color="#FFB300" fill="#FFB300" />
      <Button action={action}>
        <Text className={`text-[${size}px] flex flex-row items-center`}>
          {rate.toFixed(1)}
          {isComplete && <ChevronRight size={8} color="black" />}
        </Text>
      </Button>
    </div>
  );
};

export default RestaurantRating;
