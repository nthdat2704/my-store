import React from 'react';

interface HeaderPropsType {}

const Header = ({}: HeaderPropsType) => {
  return (
    <header className="bg-red-500">
      <h1>Logo</h1>
      <ul></ul>
    </header>
  );
};

export default Header;
