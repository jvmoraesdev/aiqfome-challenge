import React from 'react';

import HomePage from '@/components/pages/home';
import restaurantsApi from '@/services/restaurants';

export default async function Page() {
  const restaurantList = await restaurantsApi().getAllRestaurants();

  return <HomePage restaurantList={restaurantList} />;
}
