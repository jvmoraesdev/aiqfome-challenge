'use client';

import Link from 'next/link';
import React from 'react';

import { IHomeRestaurant } from '@/interfaces/restaurant.interface';
import useSearch from '@/stores/SearchProvider/useSearch';

import Banner from '../shared/Banner';
import RestaurantCard from '../shared/RestaurantCard';
import Text from '../ui/Text';

interface IHome {
  restaurantList: IHomeRestaurant[];
}

const HomePage = ({ restaurantList }: IHome) => {
  const { searchTerm } = useSearch();

  const filteredRestaurants = restaurantList.filter((restaurant) =>
    restaurant.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const { openRestaurants, closedRestaurants } = filteredRestaurants.reduce(
    (acc, restaurant) => {
      if (restaurant.isOpen) {
        acc.openRestaurants.push(restaurant);
      } else {
        acc.closedRestaurants.push(restaurant);
      }
      return acc;
    },
    { openRestaurants: [] as IHomeRestaurant[], closedRestaurants: [] as IHomeRestaurant[] }
  );

  return (
    <div className="mt-[1px]">
      <Banner />
      <div className="flex flex-col gap-[12px] px-[16px] py-[24px]">
        <div className="flex flex-col gap-[16px] pb-[12px]">
          <Text className="text-primary text-[20px] font-extrabold">abertos</Text>
          <div className="flex flex-col gap-[16px] md:grid md:grid-cols-2 lg:grid-cols-3">
            {openRestaurants.map((restaurant) => (
              <Link href={`./${restaurant.id}`} key={restaurant.id}>
                <RestaurantCard
                  name={restaurant.name}
                  image={restaurant.image}
                  deliveryFee={restaurant.deliveryFee}
                  rating={restaurant.rating}
                />
              </Link>
            ))}
          </div>
        </div>

        <Text className="text-primary pt-[24px] pb-[4px] text-[20px] font-extrabold">fechados</Text>
        <div className="flex flex-col gap-[16px] pt-[12px] md:grid md:grid-cols-2 lg:grid-cols-3">
          {closedRestaurants.map((restaurant) => (
            <RestaurantCard
              key={restaurant.id}
              name={restaurant.name}
              image={restaurant.image}
              deliveryFee={restaurant.deliveryFee}
              rating={restaurant.rating}
              disabled
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
