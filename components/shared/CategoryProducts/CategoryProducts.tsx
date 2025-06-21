import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

import Collapse from '@/components/ui/Collapse';
import { IProductCategory } from '@/interfaces/product.interface';

import CategoryDetails from './CategoryDeatils';
import ProductItem from './ProductItem';

interface ICategoryProducts {
  categories: IProductCategory[];
}

const CategoryProducts = ({ categories }: ICategoryProducts) => {
  const pathname = usePathname();

  return (
    <div className="bg-foreground-secondary flex flex-col justify-between gap-[4px]">
      {categories.map((category) => {
        const hasDiscount = category.products.some((product) => product.promotionPrice);

        const header = (
          <CategoryDetails
            hasDiscount={hasDiscount}
            name={category.name}
            description={category.description}
            key={category.id}
          />
        );

        const content = (
          <div className="flex flex-col gap-[24px]">
            {category.products.map((product) =>
              product.isAvailable ? (
                <Link href={`./${pathname}/${product.id}`} key={product.id}>
                  <ProductItem product={product} />
                </Link>
              ) : (
                <ProductItem product={product} key={product.id} />
              )
            )}
          </div>
        );
        return <Collapse key={category.id} header={header} content={content} />;
      })}
    </div>
  );
};

export default CategoryProducts;
