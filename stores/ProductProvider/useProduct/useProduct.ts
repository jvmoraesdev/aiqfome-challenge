import { useContext } from 'react';

import { ProductContext } from '../Product.provider';

const useProduct = () => {
  const context = useContext(ProductContext);

  if (!context) {
    throw new Error('useProduct cannot be used outside of the ProductProvider component');
  }

  return context;
};

export default useProduct;
