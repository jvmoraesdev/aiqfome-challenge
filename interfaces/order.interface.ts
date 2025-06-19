export interface IOrderOption {
  name: string;
  selectedOptions: string[];
  price?: number;
}

export interface IOrderItem {
  productId: string;
  productName: string;
  quantity: number;
  price: number;
  options: IOrderOption[];
  observations?: string;
}

export interface IOrder {
  id: number;
  restaurantId: string;
  restaurantName: string;
  restaurantImage: string;
  products: IOrderItem[];
  finalPrice: number;
}
