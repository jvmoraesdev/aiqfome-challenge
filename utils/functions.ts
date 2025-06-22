import { ISelectedOptions } from '@/interfaces/general.interface';
import { IProductOption } from '@/interfaces/product.interface';

type ICalculateDeliveryDay = (estimatedDeliveryTime: number) => string;

export const calculateDeliveryDay: ICalculateDeliveryDay = (estimatedDeliveryTime: number) => {
  const now = new Date();
  const deliveryTimeMs = estimatedDeliveryTime * 60 * 1000;

  const estimatedDeliveryDate = new Date(now.getTime() + deliveryTimeMs);

  const isSameDay = now.getDate() === estimatedDeliveryDate.getDate();

  return isSameDay ? 'hoje' : 'amanhã';
};

type IFormatDecimal = (num: number, fixed: number) => string;

export const formatDecimal: IFormatDecimal = (num, fixed) => {
  return num.toFixed(fixed).replace('.', ',');
};

type IAreAllRequiredOptionsSelected = (
  productOptions: IProductOption[],
  selectedOptions: ISelectedOptions[]
) => boolean;

export const areAllRequiredOptionsSelected: IAreAllRequiredOptionsSelected = (
  productOptions,
  selectedOptions
) => {
  return productOptions.every((option) => {
    if (option.minQuantity > 0) {
      const selectedInGroup = selectedOptions.filter((selected) => selected.groupId === option.id);

      const totalQuantity = selectedInGroup.reduce((sum, item) => sum + item.quantity, 0);

      return totalQuantity >= option.minQuantity;
    }

    return true;
  });
};

type ICalculateFinalValue = (selectedOptions: ISelectedOptions[], quantity: number) => number;

export const calculateFinalValue: ICalculateFinalValue = (selectedOptions, quantity) => {
  const itemValue = selectedOptions.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const finalValue = itemValue * quantity;
  return finalValue;
};
