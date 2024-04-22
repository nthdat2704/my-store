import React from 'react';
import Logo from './header/logo';
import { supportCustom } from '@/shared/constant/footer';
import Link from 'next/link';

interface FooterPropsType {}

const Footer = ({}: FooterPropsType) => {
  return (
    <footer className="bg-blue-500 py-10 text-white">
      <div className="flex justify-between">
        <div>
          <Logo />
        </div>
        <div>
          <h1 className="mb-4">{supportCustom.title}</h1>
          <ul>
            {supportCustom.data.map((item) => (
              <li key={item.id}>
                <Link href={item.path}>{item.text}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h1 className="mb-4">{supportCustom.title}</h1>
          <ul>
            {supportCustom.data.map((item) => (
              <li key={item.id}>
                <Link href={item.path}>{item.text}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h1 className="mb-4">{supportCustom.title}</h1>
          <ul>
            {supportCustom.data.map((item) => (
              <li key={item.id}>
                <Link href={item.path}>{item.text}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
