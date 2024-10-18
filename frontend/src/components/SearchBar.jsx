import React from 'react';
import { Input } from './ui/input';

export const SearchBar = ({ value, onChange, placeholder }) => {
  return (
    <Input
      type="text"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="w-full"
    />
  );
};