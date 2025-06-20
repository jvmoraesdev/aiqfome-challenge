'use client';

import React, { createContext, ReactNode, useMemo, useState } from 'react';

interface ISearchContext {
  searchTerm: string;
  setSearchTerm: (value: string) => void;
}

export const SearchContext = createContext<ISearchContext | undefined>(undefined);

const SearchProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const contextValue: ISearchContext = useMemo(() => ({ searchTerm, setSearchTerm }), [searchTerm]);

  return <SearchContext.Provider value={contextValue}>{children}</SearchContext.Provider>;
};

export default SearchProvider;
