import { ChevronRight, MapPin } from 'lucide-react';
import React from 'react';

import Button from '@/components/ui/Button';

const Location = () => {
  return (
    <div className="flex h-[40px] w-[254px] items-center justify-start gap-[10px]">
      <MapPin color="white" />
      <div className="flex flex-col">
        <span className="text-light-secondary text-[14px]">entregando em </span>
        <Button
          action={() => {
            console.log('hi');
          }}
        >
          <span className="text-light-primary text-[16px] font-bold">Rua Mandaguari, 198</span>
          <ChevronRight color="white" />
        </Button>
      </div>
    </div>
    // </div>
  );
};

export default Location;
