'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

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
    name,
    restaurantId,
    price,
    image,
    description,
    isIncreasable,
    options,
    id: productId
  } = product;
  const router = useRouter();

  const { notes, setNotes, quantity, setQuantity, finalValue, selectedOptions, cleanProduct } =
    useProduct();
  const { addProductToOrder } = useOrder();

  const [availbleToOrder, setAvailbleToOrder] = useState<boolean>(false);

  useEffect(() => {
    if (options) {
      setAvailbleToOrder(areAllRequiredOptionsSelected(options, selectedOptions));
    } else {
      setAvailbleToOrder(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedOptions]);

  const [showQuantity, setShowQuantity] = useState(false);

  const handleNavigateToRestaurant = () => {
    router.push(`/${restaurantId}`);
  };

  const handleAddToCart = () => {
    addProductToOrder({
      restaurantId,
      productName: name,
      productId,
      quantity,
      notes,
      price: finalValue,
      options: selectedOptions
    });

    router.push(`/${restaurantId}/order`);
    cleanProduct();
  };

  useEffect(() => {
    if (quantity > 1) {
      setShowQuantity(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="bg-background flex flex-col gap-[16px] pb-[68px]">
      <div className="relative aspect-[3/1] w-full sm:aspect-[4/1] md:aspect-[5/1] lg:aspect-[6/1] xl:aspect-[7/1]">
        {image ? <Image src={image} alt={name} fill className="object-cover" priority /> : <></>}
      </div>

      <div className="flex flex-col gap-[16px]">
        <div className="flex flex-col px-[16px]">
          <div className="flex flex-col gap-[6px]">
            <Text className="text-dark-primary text-[20px]">{name}</Text>
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
                <Text className="text-dark-primary text-[14px]">{`R$ ${finalValue ? formatDecimal(finalValue, 2) : formatDecimal(price, 2)}`}</Text>
              </div>
            </div>

            {showQuantity ? (
              <Counter
                onExclude={handleNavigateToRestaurant}
                value={quantity}
                setValue={setQuantity}
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
              value={notes}
              setValue={setNotes}
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
