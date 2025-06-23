import { Skeleton } from 'antd';
import React from 'react';

export default function Loading() {
  return (
    <div className="mt-[1px] flex flex-col gap-[14px] px-[16px] pt-[24px]">
      <Skeleton active />
      <Skeleton active />
      <Skeleton active />

      <Skeleton active />
    </div>
  );
}
