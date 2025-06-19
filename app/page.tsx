import React from 'react';

import home from '@/services/restaurants';

export default async function Home() {
  const a = await home().getAllRestaurants();

  return (
    <div className="flex h-screen w-screen flex-col items-stretch justify-center">
      aiqfome
      {a.map((teste) => teste.rating)}
    </div>
  );
}
