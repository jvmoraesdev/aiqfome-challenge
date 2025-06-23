'use client';

import React, { createContext, ReactNode, useEffect, useMemo, useState } from 'react';

import { ISelectedOptions } from '@/interfaces/general.interface';
import { IOrderItem } from '@/interfaces/order.interface';
import { IProductItemData } from '@/interfaces/product.interface';
import { calculateProductPrice } from '@/utils/functions';

interface IProductContext {
  quantity: number;
  setQuantity: (value: number) => void;
  notes?: string;
  setNotes: (value?: string) => void;
  finalValue: number;
  selectedOptions: ISelectedOptions[];
  setSelectedOptions: (value: ISelectedOptions[]) => void;
  setProduct: (product: IOrderItem) => void;
  cleanProduct: () => void;
}

export const ProductContext = createContext<IProductContext | undefined>(undefined);

const ProductProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [quantity, setQuantity] = useState<number>(1);
  const [notes, setNotes] = useState<string | undefined>();
  const [finalValue, setFinalValue] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState<ISelectedOptions[]>([]);
  const [currentItemData, setCurrentItemData] = useState<IProductItemData>();

  useEffect(() => {
    const stored = localStorage.getItem('orderItem');
    if (stored) {
      setProduct(JSON.parse(stored));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(
      'orderItem',
      JSON.stringify({
        restaurantId: currentItemData?.restaurantId,
        productId: currentItemData?.id,
        productName: currentItemData?.name,
        quantity,
        price: finalValue,
        options: selectedOptions,
        notes
      })
    );
  }, [finalValue, currentItemData, notes, quantity, selectedOptions]);

  useEffect(() => {
    setFinalValue(calculateProductPrice(selectedOptions, quantity));
  }, [quantity, selectedOptions]);

  const setProduct = (product: IOrderItem) => {
    setSelectedOptions(product.options);
    setQuantity(product.quantity);
    setNotes(product.notes);
    setCurrentItemData({
      id: product.productId,
      name: product.productName,
      restaurantId: product.restaurantId
    });
  };

  const cleanProduct = () => {
    setQuantity(1);
    setNotes(undefined);
    setFinalValue(0);
    setSelectedOptions([]);
    localStorage.removeItem('orderItem');
  };

  const contextValue: IProductContext = useMemo(
    () => ({
      quantity,
      setQuantity,
      notes,
      setNotes,
      finalValue,
      selectedOptions,
      setSelectedOptions,
      setProduct,
      cleanProduct
    }),
    [quantity, notes, finalValue, selectedOptions]
  );

  return <ProductContext.Provider value={contextValue}>{children}</ProductContext.Provider>;
};

export default ProductProvider;
