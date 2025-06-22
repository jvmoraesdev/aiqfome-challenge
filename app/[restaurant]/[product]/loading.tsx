import { Skeleton } from 'antd';
import SkeletonNode from 'antd/es/skeleton/Node';
import React from 'react';

export default function Loading() {
  return (
    <div className="mt-[1px]">
      <SkeletonNode active className="min-h-[200px] min-w-[100%]" />
      <div className="mt-[1px] flex flex-col gap-[14px] px-[16px] pt-[24px]">
        <Skeleton paragraph active className="min-h-[150px]" />

        <Skeleton paragraph active />
        <Skeleton paragraph active />
      </div>
    </div>
  );
}
