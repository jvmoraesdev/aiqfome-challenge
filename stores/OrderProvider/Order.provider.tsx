'use client';

import React, { createContext, ReactNode, useEffect, useMemo, useState } from 'react';

import { IOrderItem } from '@/interfaces/order.interface';
import { calculateSubtotal } from '@/utils/functions';

interface IOrderContext {
  products?: IOrderItem[];
  setProducts: (producst: IOrderItem[]) => void;
  addProductToOrder: (product: IOrderItem) => void;
  removeProductToOrder: (product: IOrderItem) => void;
  subtotal: number;
}

export const OrderContext = createContext<IOrderContext | undefined>(undefined);

const OrderProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [subtotal, setSubtotal] = useState<number>(0);
  const [products, setProducts] = useState<IOrderItem[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem('orderProducts');
    if (stored) {
      setProducts(JSON.parse(stored));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('orderProducts', JSON.stringify(products));
  }, [products]);

  const addProductToOrder = (newProduct: IOrderItem) => {
    setProducts((prev) => {
      return prev ? [...prev, newProduct] : [newProduct];
    });
  };

  const removeProductToOrder = (productToRemove: IOrderItem) => {
    setProducts((prev) => prev?.filter((product) => product !== productToRemove));
  };

  useEffect(() => {
    if (products) {
      setSubtotal(calculateSubtotal(products));
    }
  }, [products]);

  const contextValue: IOrderContext = useMemo(
    () => ({
      products,
      setProducts,
      addProductToOrder,
      removeProductToOrder,
      subtotal
    }),
    [products, subtotal]
  );

  return <OrderContext.Provider value={contextValue}>{children}</OrderContext.Provider>;
};

export default OrderProvider;
