import { ChevronRight, MapPin } from 'lucide-react';
import React from 'react';

import Button from '@/components/ui/Button';
import COLORS from '@/components/ui/Colors';
import Text from '@/components/ui/Text';

const Location = () => {
  return (
    <div className="flex h-[40px] w-[254px] items-center justify-start gap-[10px]">
      <MapPin color={COLORS.background} />
      <div className="flex flex-col">
        <Text className="text-light-secondary text-[14px]">entregando em </Text>
        <Button
          action={() => {
            console.log('hi');
          }}
        >
          <Text className="text-light-primary text-[16px]">Rua Mandaguari, 198</Text>
          <ChevronRight color={COLORS.background} />
        </Button>
      </div>
    </div>
  );
};

export default Location;
