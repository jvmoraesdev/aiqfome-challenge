import { useContext } from 'react';

import { SearchContext } from '../Search.provider';

const useSearch = () => {
  const context = useContext(SearchContext);

  if (!context) {
    throw new Error('useSearch cannot be used outside of the ContractsProvider component');
  }

  return context;
};

export default useSearch;
