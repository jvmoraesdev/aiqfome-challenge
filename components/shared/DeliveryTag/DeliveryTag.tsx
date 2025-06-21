import React from 'react';

import COLORS from '@/components/ui/Colors';
import Text from '@/components/ui/Text';
import DeliveryGhostIcon from '@/public/deliveryGhost.svg';
import DeliveryIcon from '@/public/deliveryIcon.svg';

interface IDeliveryTag {
  fee: number;
  isGhostIcon?: boolean;
}

const DeliveryTag = ({ fee, isGhostIcon }: IDeliveryTag) => {
  const color = fee ? COLORS.primary : COLORS.success;
  const colorText = fee ? 'text-primary' : 'text-success';
  const Icon = fee && isGhostIcon ? DeliveryGhostIcon : DeliveryIcon;

  return (
    <div className="flex flex-row items-center gap-[2px]">
      <Icon fill={color} width="24px" />
      <Text className={`text-[14px] ${colorText}`}>{fee ? `R$${fee.toFixed(2)}` : `grátis`}</Text>
    </div>
  );
};

export default DeliveryTag;
