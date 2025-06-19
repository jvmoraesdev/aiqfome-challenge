export interface ICategory {
  id: string;
  name: string;
  description?: string;
  restaurantId: string;
}

export interface IProductCategory extends ICategory {
  products: Omit<IProduct, 'options' | 'image' | 'categoryId' | 'restaurantId'>[];
}

export interface IProduct {
  id: string;
  price: number;
  categoryId: string;
  promotionPrice?: number;
  name: string;
  restaurantId: string;
  image?: string;
  description?: string;
  isAvailable: boolean;
  options?: IProductOption[];
}
export interface IProductOptionItem {
  id: string;
  name: string;
  price?: number;
}

export interface IProductOption {
  id: string;
  name: string;
  description?: string;
  mandatory: boolean;
  maxQuantity: number;
  items: IProductOptionItem[];
}
