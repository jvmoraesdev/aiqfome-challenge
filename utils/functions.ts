import {
  IAreAllRequiredOptionsSelected,
  ICalculateDeliveryDay,
  ICalculateProductPrice,
  ICalculateSubtotal,
  IFormatDecimal,
  ILimiteTextCharacters
} from '@/interfaces/utils.interface';

export const calculateDeliveryDay: ICalculateDeliveryDay = (estimatedDeliveryTime: number) => {
  const now = new Date();
  const deliveryTimeMs = estimatedDeliveryTime * 60 * 1000;

  const estimatedDeliveryDate = new Date(now.getTime() + deliveryTimeMs);

  const isSameDay = now.getDate() === estimatedDeliveryDate.getDate();

  return isSameDay ? 'hoje' : 'amanhã';
};

export const limiteTextCharacters: ILimiteTextCharacters = (text, maxCharacters) => {
  return text.length <= maxCharacters ? text : text.substring(0, maxCharacters) + '...';
};

export const formatDecimal: IFormatDecimal = (num, fixed) => {
  return num.toFixed(fixed).replace('.', ',');
};

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

export const calculateProductPrice: ICalculateProductPrice = (selectedOptions, quantity) => {
  const itemValue = selectedOptions.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const finalValue = itemValue * quantity;
  return finalValue;
};

export const calculateSubtotal: ICalculateSubtotal = (products) => {
  const subtotal = products.reduce((sum, item) => sum + item.price, 0);
  return subtotal;
};
