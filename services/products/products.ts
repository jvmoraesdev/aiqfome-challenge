import { IProductApi } from '@/interfaces/api.interface';
import { IProduct } from '@/interfaces/product.interface';

const productsApi: IProductApi = () => {
  const { API_BASE_URL } = process.env;

  /* 
    Since the backend is being mocked using server.json, some data manipulation is
    being performed within this API layer. Ideally, such manipulation should not occur
    at this level and should instead be handled directly by the backend, with the
    endpoint returning a properly structured response
  */

  const getProductByRestaurantAndProductId = async (
    restaurantId: string,
    productId: string
  ): Promise<IProduct> => {
    const response = await fetch(
      `${API_BASE_URL}/products?id=${productId}&restaurantId=${restaurantId}`
    );
    if (!response) {
      throw new Error(`Failed to fetch product ${productId}`);
    }
    const data = await response.json();

    return data[0];
  };

  return {
    getProductByRestaurantAndProductId
  };
};

export default productsApi;
