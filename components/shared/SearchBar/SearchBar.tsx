'use client';

import { Search } from 'lucide-react';
import React from 'react';

import Card from '@/components/ui/Card';
import COLORS from '@/components/ui/Colors';
import Input from '@/components/ui/Input';
import useSearch from '@/stores/SearchProvider/useSearch';

const SearchBar = () => {
  const { searchTerm, setSearchTerm } = useSearch();

  return (
    <Card className="flex h-[40px] w-full items-center gap-[8px] bg-white px-[12px] md:w-[752px] lg:w-[1008px]">
      <Search size={16} color={COLORS['text-light-secondary']} />
      <Input
        value={searchTerm}
        setValue={setSearchTerm}
        type="text"
        placeholder="busque pela loja ou culinária"
        className="w-[100%]"
      />
    </Card>
  );
};

export default SearchBar;
