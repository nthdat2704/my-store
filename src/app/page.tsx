import React from 'react';
import { Button } from '@/shared/components/ui/button';
import Banner from '@/features/home-feature/components/banner';
import HighLightPoint from '@/features/home-feature/components/high-light-point';
import ListProduct from '@/features/home-feature/components/list-product';
interface HomePropsType {}

const Home = ({}: HomePropsType) => {
  return (
    <>
      <Banner />
      <HighLightPoint />
      <ListProduct />
    </>
  );
};

export default Home;
