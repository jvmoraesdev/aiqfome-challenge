'use client';

import { Search } from 'lucide-react';
import React from 'react';

import Card from '@/components/ui/Card';
import COLORS from '@/components/ui/Colors';
import useSearch from '@/stores/SearchProvider/useSearch';

const SearchBar = () => {
  const { searchTerm, setSearchTerm } = useSearch();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  return (
    <Card className="flex h-40 w-full items-center gap-[8px] bg-white px-[12px]">
      <Search size={16} color={COLORS['text-light-secondary']} />
      <input
        value={searchTerm}
        onChange={handleChange}
        className="text-dark-secondary w-full text-[14px] font-[600] outline-none"
        type="text"
        placeholder="busque pela loja ou culinária"
      />
    </Card>
  );
};

export default SearchBar;
