import { ROUTES } from '@/shared/routes';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface LogoPropsType {}

const Logo = ({}: LogoPropsType) => {
  return (
    <Link href={ROUTES.HOME}>
      <Image
        src={'/assets/images/logo.webp'}
        width="100"
        height={100}
        alt="logo"
      />
    </Link>
  );
};

export default Logo;
