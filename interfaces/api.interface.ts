import { IProduct } from './product.interface';
import { IHomeRestaurant, IRestaurantProducts } from './restaurant.interface';

export type IRestaurantApi = () => {
  getAllRestaurants: () => Promise<IHomeRestaurant[]>;
  getRestaurantById: (restaurantId: string) => Promise<IRestaurantProducts>;
};

export type IProductApi = () => {
  getProductByRestaurantAndProductId: (
    restaurantId: string,
    productId: string
  ) => Promise<IProduct>;
};
