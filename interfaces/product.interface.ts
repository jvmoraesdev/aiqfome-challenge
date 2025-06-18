export interface IProduct {
  id: number;
  price: number;
  promotionPrice?: number;
  name: string;
  restaurantId: number;
  image?: string;
  description?: string;
  isAvailable: boolean;
  options?: IProductOption[];
}

export interface IProductOptionItem {
  id: number;
  name: string;
  price?: number;
}

export interface IProductOption {
  id: number;
  name: string;
  description?: string;
  mandatory: boolean;
  maxQuantity: number;
  items: IProductOptionItem[];
}
