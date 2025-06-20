import { IRestaurantApi } from '@/interfaces/api.interface';
import { ICategory, IProduct } from '@/interfaces/product.interface';
import {
  IHomeRestaurant,
  IRestaurant,
  IRestaurantProducts
} from '@/interfaces/restaurant.interface';

const restaurantsApi: IRestaurantApi = () => {
  const { API_BASE_URL } = process.env;

  /* 
    Since the backend is being mocked using server.json, some data manipulation is
    being performed within this API layer. Ideally, such manipulation should not occur
    at this level and should instead be handled directly by the backend, with the
    endpoint returning a properly structured response
  */

  const getAllRestaurants = async (): Promise<IHomeRestaurant[]> => {
    const response = await fetch(`${API_BASE_URL}/restaurants`);
    if (!response) {
      throw new Error('Failed to fetch restaurants');
    }
    const data = await response.json();

    return data.map((restaurant: IRestaurant) => ({
      id: restaurant.id,
      name: restaurant.name,
      rating: restaurant.rating,
      image: restaurant.image,
      deliveryFee: restaurant.deliveryFee,
      isOpen: restaurant.isOpen
    }));
  };

  const getRestaurantById = async (restaurantId: string): Promise<IRestaurantProducts> => {
    const restaurant = await fetch(`${API_BASE_URL}/restaurants?id=${restaurantId}`);
    const categories = await fetch(`${API_BASE_URL}/categories?restaurantId=${restaurantId}`);
    const products = await fetch(`${API_BASE_URL}/products?restaurantId=${restaurantId}`);

    if (!restaurant || !products || !categories) {
      throw new Error(`Failed to fetch restaurant ${restaurantId}`);
    }

    const restaurantData = await restaurant.json();
    const categoriesData = await categories.json();
    const productsData = await products.json();

    return {
      restaurant: restaurantData[0],
      categories: categoriesData.map((category: ICategory) => ({
        id: category.id,
        name: category.name,
        description: category.description,
        products: productsData
          .filter((product: IProduct) => product.categoryId === category.id)
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          .map(({ options, image, categoryId, restaurantId, ...rest }: IProduct) => rest)
      }))
    };
  };

  return {
    getAllRestaurants,
    getRestaurantById
  };
};

export default restaurantsApi;
