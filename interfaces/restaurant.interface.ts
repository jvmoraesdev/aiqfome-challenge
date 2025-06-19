import { IProductCategory } from './product.interface';

export interface IRestaurant {
  id: string;
  name: string;
  rating: number;
  image: string;
  minimumOrderPrice: number;
  deliveryFee: number;
  estimatedDeliveryTime: number;
  distance: string;
  closingTime: string;
  openingTime: string;
  freeDeliveryThreshold: number;
}

export type IHomeRestaurant = Pick<
  IRestaurant,
  'id' | 'name' | 'rating' | 'image' | 'deliveryFee' | 'openingTime' | 'closingTime'
>;

export interface IRestaurantProducts {
  restaurant: IRestaurant;
  categories: IProductCategory[];
}
