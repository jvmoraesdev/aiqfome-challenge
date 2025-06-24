'use client';

import React, { createContext, ReactNode, useEffect, useMemo, useState } from 'react';

import { IOrderItem } from '@/interfaces/order.interface';
import { calculateProductPrice } from '@/utils/functions';

interface IProductContext {
  finalValue: number;
  product: IOrderItem;
  setProduct: (product: IOrderItem) => void;
  cleanProduct: () => void;
}

export const ProductContext = createContext<IProductContext | undefined>(undefined);

const ProductProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [finalValue, setFinalValue] = useState(0);
  const [product, setProduct] = useState<IOrderItem>({} as IOrderItem);

  useEffect(() => {
    const stored = localStorage.getItem('orderItem');
    if (stored) {
      const objStorage = JSON.parse(stored);
      if (
        objStorage.productId === product?.productId &&
        objStorage.restaurantId === product.restaurantId
      ) {
        setProduct({
          ...product,
          options: JSON.parse(stored).options || undefined
        });
      }
    }
  }, []);

  useEffect(() => {
    if (product.productId) {
      localStorage.setItem('orderItem', JSON.stringify(product));
    }
  }, [product]);

  useEffect(() => {
    if (product.options?.length) {
      setFinalValue(calculateProductPrice(product.options, product.quantity));
    } else {
      setFinalValue(product?.price * product?.quantity);
    }
  }, [product]);

  const cleanProduct = () => {
    setFinalValue(0);
    setProduct({} as IOrderItem);
    localStorage.removeItem('orderItem');
  };

  const contextValue: IProductContext = useMemo(
    () => ({
      finalValue,
      product,
      setProduct,
      cleanProduct
    }),
    [finalValue, product]
  );

  return <ProductContext.Provider value={contextValue}>{children}</ProductContext.Provider>;
};

export default ProductProvider;
