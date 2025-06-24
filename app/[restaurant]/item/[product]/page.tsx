import React from 'react';

import ProductPage from '@/components/pages/product';
import productsApi from '@/services/products';

export default async function Product({
  params
}: {
  params: Promise<{ product: string; restaurant: string }>;
}) {
  const productId = (await params).product;
  const restaurantId = (await params).restaurant;
  const product = await productsApi().getProductByRestaurantAndProductId(restaurantId, productId);

  return <ProductPage product={product} />;
}
