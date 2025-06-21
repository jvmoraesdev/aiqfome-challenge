'use client';

import { Minus, Plus } from 'lucide-react';
import React from 'react';

import Button from './Button';
import COLORS from './Colors';
import Text from './Text';

interface ICounter {
  value: number;
  setValue: (value: number) => void;
  minValue?: number;
  maxValue?: number;
}

const Counter = ({ value = 0, setValue, minValue = 0, maxValue = 999 }: ICounter) => {
  const handleChangeValue = (step: number) => {
    setValue(value + step);
  };

  const getButtonClass = (isDisabled: boolean) =>
    isDisabled
      ? 'bg-foreground-secondary flex h-[24px] w-[24px] items-center justify-center rounded-full opacity-100'
      : 'border-success flex h-[24px] w-[24px] items-center justify-center rounded-full border-[1px]';

  const getIconColor = (isDisabled: boolean) =>
    isDisabled ? COLORS['text-light-disabled'] : COLORS.success;

  const isDecrementDisabled = value <= minValue;
  const isIncrementDisabled = value >= maxValue;

  return (
    <div className="flex w-[96px] min-w-[96px] items-center justify-between">
      <Button
        disabled={isDecrementDisabled}
        action={() => handleChangeValue(-1)}
        className={getButtonClass(isDecrementDisabled)}
      >
        <Minus size={16} color={getIconColor(isDecrementDisabled)} />
      </Button>

      <Text className="text-[14px]">{value}</Text>

      <Button
        disabled={isIncrementDisabled}
        action={() => handleChangeValue(1)}
        className={getButtonClass(isIncrementDisabled)}
      >
        <Plus size={16} color={getIconColor(isIncrementDisabled)} />
      </Button>
    </div>
  );
};

export default Counter;
