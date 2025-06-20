'use client';

import { User } from 'lucide-react';
import React from 'react';

import COLORS from '@/components/ui/Colors';
import Logo from '@/public/logo.svg';

import Location from '../Location';

const Header = () => {
  return (
    <div className="bg-primary align-center absolute flex h-[128px] w-screen items-center justify-between p-[16px]">
      <Logo alt="Logo aiqfome" width={32} />
      <Location />
      <User color={COLORS.background} />
    </div>
  );
};

export default Header;
