import { ISelectedOptions } from './general.interface';

export interface IOrderItem {
  restaurantId: string;
  productId: string;
  productName: string;
  quantity: number;
  price: number;
  options: ISelectedOptions[];
  notes?: string;
}

export interface IOrder {
  id: number;
  restaurantId: string;
  restaurantName: string;
  restaurantImage: string;
  products: IOrderItem[];
  finalPrice: number;
}
