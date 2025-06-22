'use client';

import { User } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

import COLORS from '@/components/ui/Colors';
import Logo from '@/public/logo.svg';

import Location from '../Location';
import SearchBar from '../SearchBar';

const Header = () => {
  const pathname = usePathname();
  const searchablePaths = ['/'];

  const showSearch = searchablePaths.includes(pathname);

  return (
    <div
      className={`bg-primary flex h-[${showSearch ? 128 : 72}px] w-screen flex-col gap-[16px] p-[16px]`}
    >
      <div className="align-center flex items-center justify-between">
        <Link href={'/'}>
          <Logo alt="Logo aiqfome" width={32} />
        </Link>
        <Location />
        <User color={COLORS.background} />
      </div>
      {showSearch && <SearchBar />}
    </div>
  );
};

export default Header;
