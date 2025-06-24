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
  groupName: string;
  value: string;
  name: string;
  quantity: number;
  price: number;
}

export interface IPromotionalBanner {
  url: string;
  image: string;
  alt: string;
}
