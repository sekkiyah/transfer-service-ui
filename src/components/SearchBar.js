import React, { useState } from 'react';
import { Form } from 'react-bootstrap';

const SearchBar = ({ searchData, setSearchData }) => {
  const [searchInput, setSearchInput] = useState('');

  return (
    <Form.Control
      type='text'
      placeholder='Search here...'
      value={searchInput || ''}
      onChange={e => setSearchInput(e.target.value)}
    />
  );
};

export default SearchBar;
