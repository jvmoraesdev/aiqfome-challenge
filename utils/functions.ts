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
