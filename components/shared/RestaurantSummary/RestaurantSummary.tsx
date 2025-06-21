import { ChevronRight, Heart, Share2 } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import COLORS from '@/components/ui/Colors';
import Text from '@/components/ui/Text';
import { IRestaurant } from '@/interfaces/restaurant.interface';
import { calculateDeliveryDay } from '@/utils/functions';

import DeliveryTag from '../DeliveryTag';
import RestaurantRating from '../RestaurantRating';

export interface IRestaurantSummary {
  restaurant: IRestaurant;
}

const RestaurantSummary = ({ restaurant }: IRestaurantSummary) => {
  const {
    image,
    name,
    rating,
    closingTime,
    deliveryFee,
    distance,
    estimatedDeliveryTime,
    freeDeliveryThreshold,
    minimumOrderPrice
  } = restaurant;

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          text: `ow, dá uma olhada nessa loja do aiqfome! ${restaurant.name} ${window.location.href}`,
          title: restaurant.name
        });
      } catch (error) {
        console.error('Erro ao compartilhar:', error);
      }
    } else {
      alert(
        'Compartilhamento não é suportável nesse navegador. Para compartilhar, você pode copiar o link'
      );
    }
  };

  return (
    <div className="flex flex-col gap-[8px] px-[16px] py-[24px]">
      <div className="flex h-[36px] items-center gap-[8px]">
        <Card className="size-[36px]">
          <Image src={image} alt={name} width={36} height={36} className="size-[36px]" />
        </Card>
        <Text className="text-dark-contrast text-[20px] font-extrabold"> {name} </Text>
      </div>

      <div className="flex h-[32px] justify-between">
        <div className="flex gap-4">
          <Button action={handleShare}>
            <Share2 className="scale-x-[-1]" color={COLORS.primary} />
          </Button>
          <Button>
            <Heart color={COLORS.primary} />
          </Button>
        </div>
        <Text className="text-success flex items-center gap-[4px]">
          mais info
          <ChevronRight size={8} color={COLORS.success} />
        </Text>
      </div>

      <div className="flex flex-col gap-[4px]">
        <div className="flex gap-[6px]">
          <DeliveryTag fee={deliveryFee} />
          <Text className="text-dark-secondary">•</Text>
          <Text>{`${calculateDeliveryDay(estimatedDeliveryTime.max)}, ${estimatedDeliveryTime.min} - ${estimatedDeliveryTime.max} min`}</Text>
          <Text className="text-dark-secondary">•</Text>
          <Text>{`${distance.toFixed(1)}km`}</Text>
        </div>
        <div className="flex gap-[6px]">
          <RestaurantRating isComplete rate={rating} />
          <Text className="text-dark-secondary">•</Text>
          <Text className="text-success-secondary">{`fecha às ${closingTime}`}</Text>
        </div>
        <Card className="bg-success-background w-fit rounded-[4px] border-[0px] px-[8px] py-[4px]">
          <Text className="text-success bg-success-background">
            {`entrega grátis acima de R$ ${freeDeliveryThreshold.toFixed(2)}`}{' '}
          </Text>
        </Card>
        <Text className="text-dark-secondary">{`pedido mínimo: R$ ${minimumOrderPrice}`}</Text>
      </div>
    </div>
  );
};

export default RestaurantSummary;
