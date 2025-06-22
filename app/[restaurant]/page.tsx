import React from 'react';

import RestaurantPage from '@/components/pages/restaurant';
import restaurantsApi from '@/services/restaurants';

export default async function Restaurant({ params }: { params: Promise<{ restaurant: string }> }) {
  const restaurantId = (await params).restaurant;
  const restaurantWithProducts = await restaurantsApi().getRestaurantById(restaurantId);

  return <RestaurantPage {...restaurantWithProducts} />;
}
