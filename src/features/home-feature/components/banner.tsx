import { Carousel } from '@/shared/components/ui/carousel';
import React from 'react';
import CarouselBanner from './carousel-banner';

interface BannerPropsType {}

const Banner = ({}: BannerPropsType) => {
  return (
    <section>
      <CarouselBanner />
    </section>
  );
};

export default Banner;
