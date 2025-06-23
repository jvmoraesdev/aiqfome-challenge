import { useContext } from 'react';

import { OrderContext } from '../Order.provider';

const useOrder = () => {
  const context = useContext(OrderContext);

  if (!context) {
    throw new Error('useOrder cannot be used outside of the OrderProvider component');
  }

  return context;
};

export default useOrder;
