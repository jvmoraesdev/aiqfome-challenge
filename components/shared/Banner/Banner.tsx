import Image from 'next/image';
import React from 'react';

import { IPromotionalBanner } from '@/interfaces/general.interface';

interface IBanner {
  banner: IPromotionalBanner;
}

const Banner = ({ banner }: IBanner) => {
  return banner.url ? (
    <a className="relative flex aspect-[3/1] w-full" href={banner.url}>
      <Image alt={banner.alt} src={banner.image} fill className="object-cover" priority />
    </a>
  ) : (
    <div className="relative flex aspect-[3/1] w-full">
      <Image alt={banner.alt} src={banner.image} fill className="object-cover" priority />
    </div>
  );
};

export default Banner;
