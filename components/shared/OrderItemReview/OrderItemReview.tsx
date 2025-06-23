import { Pencil } from 'lucide-react';
import { useRouter } from 'next/navigation';
import React from 'react';

import Button from '@/components/ui/Button';
import COLORS from '@/components/ui/Colors';
import Counter from '@/components/ui/Counter';
import Text from '@/components/ui/Text';
import { ISelectedOptions } from '@/interfaces/general.interface';
import { IOrderItem } from '@/interfaces/order.interface';
import useOrder from '@/stores/OrderProvider/useOrder';
import useProduct from '@/stores/ProductProvider/useProduct';
import { calculateProductPrice, formatDecimal } from '@/utils/functions';

import OrderItemOptionReview from './OrderItemOptionReview';

interface IOrderItemReview {
  product: IOrderItem;
  id: string;
}

const OrderItemReview = ({ product, id }: IOrderItemReview) => {
  const { products, setProducts, removeProductToOrder } = useOrder();
  const { setProduct } = useProduct();
  const router = useRouter();

  const groupedOptions = product.options.reduce<Record<string, ISelectedOptions[]>>(
    (acc, option) => {
      if (!acc[option.groupId]) {
        acc[option.groupId] = [];
      }
      acc[option.groupId].push(option);
      return acc;
    },
    {}
  );

  const handleChangeValue = (newQuantity: number) => {
    if (products) {
      setProducts(
        products.map((p) =>
          p === product
            ? { ...p, quantity: newQuantity, price: calculateProductPrice(p.options, newQuantity) }
            : p
        )
      );
    }
  };

  const handleEditItem = () => {
    setProduct(product);
    removeProductToOrder(product);
    router.push(`/${product.restaurantId}/item/${product.productId}`);
  };

  const handleExcludeItem = () => {
    if (products?.length === 1) {
      setProducts([]);
      router.push(`/${products[0].restaurantId}`);
    } else {
      removeProductToOrder(product);
    }
  };

  return (
    <div className="bg-background flex flex-col gap-[6px] py-[16px]">
      <div className="flex justify-between">
        <Text className="text-dark-contrast text-[14px]">{product.productName}</Text>
        <Text className="text-primary text-[14px]">{`R$ ${formatDecimal(product.price, 2)}`}</Text>
      </div>
      <div className="flex justify-end gap-[24px]">
        <Button action={handleEditItem} className="flex items-center gap-[4px]">
          <Pencil color={COLORS.success} size={16} />
          <Text className="text-success text-[14px]">editar</Text>
        </Button>
        <Counter
          onExclude={handleExcludeItem}
          value={product.quantity}
          setValue={handleChangeValue}
        />
      </div>

      <div className="flex flex-col gap-[6px]">
        {Object.entries(groupedOptions).map(([groupId, optionsInGroup]) => (
          <OrderItemOptionReview
            groupId={groupId}
            optionsInGroup={optionsInGroup}
            key={`${id}-${groupId}`}
            id={`${id}-${groupId}`}
          />
        ))}
      </div>

      {product.notes && (
        <div className="bg-foreground flex gap-[4px] rounded-[4px] p-[6px]">
          <Text className="text-dark-primary text-[12px] font-bold">obsevação:</Text>
          <Text className="text-dark-primary text-[12px] font-semibold">{product.notes}</Text>
        </div>
      )}
    </div>
  );
};

export default OrderItemReview;
