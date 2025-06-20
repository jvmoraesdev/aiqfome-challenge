import Image from 'next/image';
import React from 'react';

const Banner = () => {
  return (
    <div className="relative aspect-[3/1] w-full sm:aspect-[4/1] md:aspect-[5/1] lg:aspect-[6/1] xl:aspect-[7/1]">
      <Image alt="banner" src="/banner.png" fill className="object-cover" priority />
    </div>
  );
};

export default Banner;
