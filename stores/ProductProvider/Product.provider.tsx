'use client';

import React, { createContext, ReactNode, useEffect, useMemo, useState } from 'react';

import { ISelectedOptions } from '@/interfaces/general.interface';
import { calculateFinalValue } from '@/utils/functions';

interface IProductContext {
  quantity: number;
  setQuantity: (value: number) => void;
  notes: string;
  setNotes: (value: string) => void;
  finalValue: number;
  selectedOptions: ISelectedOptions[];
  setSelectedOptions: (value: ISelectedOptions[]) => void;
}

export const ProductContext = createContext<IProductContext | undefined>(undefined);

const ProductProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [quantity, setQuantity] = useState<number>(1);
  const [notes, setNotes] = useState<string>('');
  const [finalValue, setFinalValue] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState<ISelectedOptions[]>([]);

  useEffect(() => {
    setFinalValue(calculateFinalValue(selectedOptions, quantity));
  }, [quantity, selectedOptions]);

  const contextValue: IProductContext = useMemo(
    () => ({
      quantity,
      setQuantity,
      notes,
      setNotes,
      finalValue,
      selectedOptions,
      setSelectedOptions
    }),
    [quantity, notes, finalValue, selectedOptions]
  );

  return <ProductContext.Provider value={contextValue}>{children}</ProductContext.Provider>;
};

export default ProductProvider;
