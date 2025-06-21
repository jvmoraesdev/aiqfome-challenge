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
          <div className="flex flex-col gap-[16px]">
            {openRestaurants.map((teste) => (
              <Link href={`./${teste.id}`} key={teste.id}>
                <RestaurantCard
                  name={teste.name}
                  image={teste.image}
                  deliveryFee={teste.deliveryFee}
                  rating={teste.rating}
                />
              </Link>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-[16px] pt-[12px]">
          <Text className="text-primary text-[20px] font-extrabold">fechados</Text>

          {closedRestaurants.map((teste) => (
            <RestaurantCard
              key={teste.id}
              name={teste.name}
              image={teste.image}
              deliveryFee={teste.deliveryFee}
              rating={teste.rating}
              disabled
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
