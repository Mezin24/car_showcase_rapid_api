'use client';

import { FormEvent, useCallback } from 'react';
import { SearchManufacturer } from './SearchManufacturer';

export const SearchBar = () => {
  const handleSubmit = useCallback((e: FormEvent<HTMLFormElement>) => {}, []);
  return (
    <form className='searchbar'>
      <div className='searchbar__item'>
        <SearchManufacturer />
      </div>
    </form>
  );
};
