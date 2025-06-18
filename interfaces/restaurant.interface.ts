export interface IRestaurant {
  id: number;
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
