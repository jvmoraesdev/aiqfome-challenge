import React from 'react';

import OrderPage from '@/components/pages/order';
import restaurantsApi from '@/services/restaurants';

export default async function Order({ params }: { params: Promise<{ restaurant: string }> }) {
  const restaurantId = (await params).restaurant;
  const restaurant = await restaurantsApi().getRestaurantById(restaurantId);

  return <OrderPage restaurant={restaurant} />;
}
