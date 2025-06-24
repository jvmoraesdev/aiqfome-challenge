import { ISelectedOptions } from '@/interfaces/general.interface';
import { IOrderItem } from '@/interfaces/order.interface';
import { IProductOption } from '@/interfaces/product.interface';

export type ICalculateDeliveryDay = (estimatedDeliveryTime: number) => string;

export type ILimiteTextCharacters = (text: string, maxCharacters: number) => string;

export type IFormatDecimal = (num: number, fixed: number) => string;

export type IAreAllRequiredOptionsSelected = (
  productOptions: IProductOption[],
  selectedOptions: ISelectedOptions[]
) => boolean;

export type ICalculateProductPrice = (
  selectedOptions: ISelectedOptions[],
  quantity: number
) => number;

export type ICalculateSubtotal = (products: IOrderItem[]) => number;
