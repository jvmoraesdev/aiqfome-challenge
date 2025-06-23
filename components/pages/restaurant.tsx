'use client';

import React from 'react';

import { IRestaurantProducts } from '@/interfaces/restaurant.interface';

import CategoryProducts from '../shared/CategoryProducts';
import FallbackRestaurantItems from '../shared/FallbackRestaurantItems';
import RestaurantSummary from '../shared/RestaurantSummary';

const RestaurantPage = ({ restaurant, categories }: IRestaurantProducts) => {
  return (
    <div className="flex h-[100%] w-full flex-col">
      <RestaurantSummary restaurant={restaurant} />
      {categories.length ? (
        <CategoryProducts categories={categories} />
      ) : (
        <FallbackRestaurantItems />
      )}
    </div>
  );
};

export default RestaurantPage;
