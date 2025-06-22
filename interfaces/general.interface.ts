import { ReactNode } from 'react';

export interface IOption {
  label: ReactNode;
  value: string;
}

export interface IProductItemOption {
  label: string;
  value: string;
  price?: number;
  promotionPrice?: number;
}

export interface ISelectedOptions {
  groupId: string;
  value: string;
  quantity: number;
  price: number;
}
