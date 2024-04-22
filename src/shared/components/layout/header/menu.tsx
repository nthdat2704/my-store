import { MENU } from '@/shared/constant/menu';
import Link from 'next/link';
import React from 'react';

interface MenuPropsType {}

const Menu = ({}: MenuPropsType) => {
  return (
    <ul className="flex items-center gap-10">
      {MENU.map((item) => (
        <li key={item.id}>
          <Link className="p-2 hover:text-blue-300" href={item.path}>
            {item.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Menu;
