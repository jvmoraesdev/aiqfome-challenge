'use client';

import { User } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

import logo from '@/public/logo.svg';

import Location from '../Location';

const Header = () => {
  return (
    <div className="bg-primary align-center absolute flex h-[128px] w-screen items-center justify-between p-[16px]">
      <Image alt="Logo aiqfome" src={logo} width={32} />
      <Location />
      <User color="white" />
    </div>
  );
};

export default Header;
