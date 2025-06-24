'use client';

import Image from 'next/image';
import React from 'react';

import { IOrderRestaurant } from '@/interfaces/restaurant.interface';
import useOrder from '@/stores/OrderProvider/useOrder';
import { formatDecimal } from '@/utils/functions';

import OrderItemReview from '../shared/OrderItemReview';
import Button from '../ui/Button';
import Text from '../ui/Text';

interface IOrderPage {
  restaurant: IOrderRestaurant;
}

const OrderPage = ({ restaurant }: IOrderPage) => {
  const { products, subtotal } = useOrder();

  const handleGoToPayment = () => {};

  return (
    <>
      <div className="flex flex-col px-[16px] pt-[24px]">
        <div className="flex w-full items-center gap-[8px]">
          <div className="h-[32px] w-[32px] rounded-[4px]">
            <Image src={restaurant.image} alt={restaurant.name} width={32} height={32} />
          </div>
          <div className="flex flex-col">
            <Text className="text-dark-secondary text-[14px]">seus items em</Text>
            <Text className="text-dark-contrast text-[16px]">{restaurant.name}</Text>
          </div>
        </div>

        <div className="bg-foreground flex h-auto flex-col gap-[4px]">
          {products?.map((product, index) => (
            <OrderItemReview
              product={product}
              key={`${product.productId}-${index}`}
              id={`${product.productId}-${index}`}
            />
          ))}
        </div>
      </div>
      <div className="bg-background fixed bottom-0 flex h-[131px] w-screen self-center">
        <div className="bottom-0 h-full w-full rounded-t-[12px] [box-shadow:0px_0px_15px_0px_#00000026]">
          <div className="flex h-full items-center justify-center gap-[29px]">
            <div className="flex flex-col gap-[2px]">
              <Text className="text-dark-contrast text-[14px]">subtotal</Text>
              <Text className="text-primary text-[20px]">{`R$ ${formatDecimal(subtotal, 2)}`}</Text>
            </div>
            <Button
              action={handleGoToPayment}
              className="bg-primary flex h-[48px] w-[200px] items-center justify-center rounded-[8px]"
            >
              <Text className="text-background text-[14px]">ir para pagamento</Text>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderPage;
