import React from 'react';

import Text from '@/components/ui/Text';

const Footer = () => {
  return (
    <div className="bg-footer-background flex h-[119px] flex-col justify-center gap-[8px]">
      <Text className="text-primary text-center text-[14px]">feito com 💜 em maringá-PR</Text>

      <Text className="text-primary text-center text-[16px]">
        aiqfome.com © 2007-2023 aiqfome LTDA . <br />
        CNPJ: 09.186.786/0001-58
      </Text>
    </div>
  );
};

export default Footer;
