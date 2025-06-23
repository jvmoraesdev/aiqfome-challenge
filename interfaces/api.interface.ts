import { IProduct } from './product.interface';
import { IHomeRestaurant, IOrderRestaurant, IRestaurantProducts } from './restaurant.interface';

export type IRestaurantApi = () => {
  getAllRestaurants: () => Promise<IHomeRestaurant[]>;
  getRestaurantWithProductsById: (restaurantId: string) => Promise<IRestaurantProducts>;
  getRestaurantById: (restaurantId: string) => Promise<IOrderRestaurant>;
};

export type IProductApi = () => {
  getProductByRestaurantAndProductId: (
    restaurantId: string,
    productId: string
  ) => Promise<IProduct>;
};
