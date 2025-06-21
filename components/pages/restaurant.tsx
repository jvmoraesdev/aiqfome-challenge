'use client';

import React from 'react';

import { IRestaurantProducts } from '@/interfaces/restaurant.interface';

import CategoryProducts from '../shared/CategoryProducts';
import RestaurantSummary from '../shared/RestaurantSummary';

const RestaurantPage = ({ restaurant, categories }: IRestaurantProducts) => {
  return (
    <div>
      <RestaurantSummary restaurant={restaurant} />
      <CategoryProducts categories={categories} />
    </div>
  );
};

export default RestaurantPage;
