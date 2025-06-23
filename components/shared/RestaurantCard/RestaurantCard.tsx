import Image from 'next/image';
import React from 'react';

import Card from '@/components/ui/Card';
import Text from '@/components/ui/Text';

import DeliveryTag from '../DeliveryTag';
import RestaurantRating from '../RestaurantRating';

interface IRestaurantCard {
  image: string;
  name: string;
  deliveryFee: number;
  rating: number;
  disabled?: boolean;
}

const RestaurantCard = ({ image, name, deliveryFee, rating, disabled }: IRestaurantCard) => {
  return (
    <Card>
      <div className="flex h-[72px]">
        <div className="relative aspect-[1/1] w-[72px]">
          <Image
            src={image}
            alt={name}
            fill
            priority
            className={`${disabled ? 'opacity-45' : ''} object-cover`}
          />
        </div>
        <div className="m-[12px] flex h-[50px] flex-col justify-between">
          <Text className="text-dark-primary text-[16px]">{name}</Text>
          <div className="flex items-center justify-start gap-[4px]">
            <DeliveryTag fee={deliveryFee} isGhostIcon />
            <RestaurantRating isComplete={false} rate={rating} />
          </div>
        </div>
      </div>
    </Card>
  );
};

export default RestaurantCard;
