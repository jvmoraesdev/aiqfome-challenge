import React from 'react';

import HomePage from '@/components/pages/home';
import campaignsApi from '@/services/campaigns';
import restaurantsApi from '@/services/restaurants';

export default async function Page() {
  const restaurantList = await restaurantsApi().getAllRestaurants();
  const promotionalBanner = await campaignsApi().getPromotionalBanner();

  return <HomePage restaurantList={restaurantList} promotionalBanner={promotionalBanner} />;
}
