'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

import { IOrderItem } from '@/interfaces/order.interface';
import { IProduct } from '@/interfaces/product.interface';
import useOrder from '@/stores/OrderProvider/useOrder';
import useProduct from '@/stores/ProductProvider/useProduct';
import { areAllRequiredOptionsSelected, formatDecimal } from '@/utils/functions';

import ProductOption from '../shared/ProductOption';
import Button from '../ui/Button';
import Counter from '../ui/Counter';
import Text from '../ui/Text';
import TextArea from '../ui/TextArea';

interface IProductPage {
  product: IProduct;
}

const ProductPage = ({ product }: IProductPage) => {
  const {
    name: productName,
    restaurantId,
    price,
    image,
    description,
    isIncreasable,
    options,
    id: productId
  } = product;
  const router = useRouter();

  const { finalValue, product: orderProduct, setProduct, cleanProduct } = useProduct();
  const { addProductToOrder } = useOrder();

  const [availbleToOrder, setAvailbleToOrder] = useState<boolean>(false);

  useEffect(() => {
    const stored = localStorage.getItem('orderItem');

    let initialProduct: IOrderItem = {
      price,
      quantity: 1,
      productId,
      productName,
      restaurantId,
      originalPrice: price
    };

    if (stored) {
      const objStorage = JSON.parse(stored);

      if (objStorage.productId === productId && objStorage.restaurantId === restaurantId) {
        initialProduct = {
          ...initialProduct,
          quantity: objStorage.quantity,
          options: objStorage.options || undefined
        };
      }
    }

    setProduct(initialProduct);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (options) {
      if (orderProduct.options) {
        setAvailbleToOrder(areAllRequiredOptionsSelected(options, orderProduct?.options));
      } else {
        setAvailbleToOrder(false);
      }
    } else {
      setAvailbleToOrder(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [orderProduct]);

  const [showQuantity, setShowQuantity] = useState(false);

  const handleNavigateToRestaurant = () => {
    cleanProduct();
    router.push(`/${restaurantId}`);
  };

  const handleChangeCounterValue = (quantity: number) => {
    setProduct({
      ...orderProduct,
      quantity
    });
  };

  const handleChangeProductNotes = (notes: string) => {
    setProduct({
      ...orderProduct,
      notes: notes
    });
  };

  const handleAddToCart = () => {
    addProductToOrder({ ...orderProduct, price: finalValue, originalPrice: orderProduct.price });
    router.push(`/${restaurantId}/order`);
    cleanProduct();
  };

  useEffect(() => {
    if (orderProduct.quantity > 1) {
      setShowQuantity(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="bg-background flex flex-col gap-[16px] pb-[68px]">
      <div className="relative aspect-[3/1] w-full sm:aspect-[4/1] md:aspect-[5/1] lg:aspect-[6/1] xl:aspect-[7/1]">
        {image ? (
          <Image src={image} alt={productName} fill className="object-cover" priority />
        ) : (
          <></>
        )}
      </div>

      <div className="flex flex-col gap-[16px]">
        <div className="flex flex-col px-[16px]">
          <div className="flex flex-col gap-[6px]">
            <Text className="text-dark-primary text-[20px]">{productName}</Text>
            <Text className="text-dark-secondary flex items-center gap-[8px] text-[14px] font-extrabold">
              {!isIncreasable && 'a partir de '}
              <Text className="text-primary text-[18px] font-extrabold">{`R$ ${formatDecimal(price, 2)}`}</Text>
            </Text>
            <Text className="text-dark-secondary text-[14px] font-semibold">{description}</Text>
          </div>
        </div>

        <div className="bg-foreground-secondary flex flex-col gap-[4px]">
          <div className="bg-background flex justify-between px-[16px] py-[16px]">
            <div className="flex flex-col">
              <Text className="text-dark-primary text-[16px]"> quantos? </Text>
              <div className="flex items-center gap-[4px]">
                <Text className="text-dark-secondary text-[14px] font-semibold">total</Text>
                <Text className="text-dark-primary text-[14px]">{`R$ ${formatDecimal(finalValue, 2)}`}</Text>
              </div>
            </div>

            {showQuantity ? (
              <Counter
                onExclude={handleNavigateToRestaurant}
                value={orderProduct.quantity}
                setValue={handleChangeCounterValue}
              />
            ) : (
              <Button
                className="bg-dark-secondary flex h-[40px] items-center rounded-[8px] px-[24px]"
                action={() => setShowQuantity(true)}
              >
                <Text className="text-background text-[14px]">adicionar</Text>
              </Button>
            )}
          </div>

          {options?.map((option) => <ProductOption productOption={option} key={option.id} />)}

          <div className="bg-background px-[16px] pt-[16px]">
            <TextArea
              value={orderProduct.notes}
              setValue={handleChangeProductNotes}
              className="h-[58px]"
              placeholder="alguma observação do item? • opcional • ex: tirar algum ingrediente, ponto do prato"
            />
          </div>
        </div>
      </div>

      {availbleToOrder && (
        <div className="fixed bottom-[16px] z-50 flex h-[80px] items-center justify-center self-center">
          <Button
            action={handleAddToCart}
            className="text-background bg-primary flex w-[342px] items-center justify-center rounded-[8px] py-[13px] text-[16px]"
          >
            ver ticket
          </Button>
        </div>
      )}
    </div>
  );
};

export default ProductPage;
