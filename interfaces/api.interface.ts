import { IHomeRestaurant, IRestaurantProducts } from './restaurant.interface';

export type IRestaurantApi = () => {
  getAllRestaurants: () => Promise<IHomeRestaurant[]>;
  getRestaurantById: (restaurantId: string) => Promise<IRestaurantProducts>;
};
