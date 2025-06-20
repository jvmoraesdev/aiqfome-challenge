'use client';

import { User } from 'lucide-react';
import React from 'react';

import COLORS from '@/components/ui/Colors';
import Logo from '@/public/logo.svg';

import Location from '../Location';
import SearchBar from '../SearchBar';

const Header = () => {
  return (
    <div className="bg-primary flex h-[128px] w-screen flex-col gap-[16px] p-[16px]">
      <div className="align-center flex items-center justify-between">
        <Logo alt="Logo aiqfome" width={32} />
        <Location />
        <User color={COLORS.background} />
      </div>
      <SearchBar />
    </div>
  );
};

export default Header;
