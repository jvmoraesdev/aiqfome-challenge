import { Skeleton } from 'antd';
import SkeletonNode from 'antd/es/skeleton/Node';
import React from 'react';

export default function Loading() {
  return (
    <div className="mt-[1px]">
      <SkeletonNode active className="min-w-[100%]" />
      <div className="mt-[1px] flex flex-col gap-[14px] px-[16px] pt-[24px]">
        <Skeleton active />
        <Skeleton paragraph active />

        <Skeleton paragraph active />
      </div>
    </div>
  );
}
