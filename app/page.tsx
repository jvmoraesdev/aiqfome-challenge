import React from 'react';

import Home from '@/components/page/home';
import restaurantsApi from '@/services/restaurants';

export default async function Page() {
  const restaurantList = await restaurantsApi().getAllRestaurants();

  return <Home restaurantList={restaurantList} />;
}
