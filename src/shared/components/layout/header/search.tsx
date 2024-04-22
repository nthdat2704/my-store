'use client';
import React from 'react';
import { Input } from '../../ui/input';

interface SearchPropsType {}

const Search = ({}: SearchPropsType) => {
  const handleSearch = (element: any) => {
    const keyword = element.target.value;
    console.log('searching...', keyword);
  };

  return (
    <Input
      onChange={handleSearch}
      className="max-w-[210px] w-full"
      placeholder="Search..."
    />
  );
};

export default Search;
