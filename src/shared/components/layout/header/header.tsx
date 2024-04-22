import { MENU } from '@/shared/constant/menu';
import { ROUTES } from '@/shared/routes';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Input } from '../../ui/input';
import Logo from './logo';
import Menu from './menu';
import Search from './search';

interface HeaderPropsType {}

const Header = ({}: HeaderPropsType) => {
  return (
    <header>
      <div className="p-2 bg-slate-100 flex items-center justify-between">
        <Logo />
        <Menu />
        <Search />
      </div>
    </header>
  );
};

export default Header;
