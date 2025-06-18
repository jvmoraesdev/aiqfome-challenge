export interface IOrderOption {
  name: string;
  selectedOptions: string[];
  price?: number;
}

export interface IOrderItem {
  productId: number;
  productName: string;
  quantity: number;
  price: number;
  options: IOrderOption[];
  observations?: string;
}

export interface IOrder {
  id: number;
  restaurantId: number;
  restaurantName: string;
  restaurantImage: string;
  products: IOrderItem[];
  finalPrice: number;
}
