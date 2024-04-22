import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/shared/components/ui/carousel';
import React from 'react';
import { carousel } from '../constants/carousel';
import Image from 'next/image';

interface CarouselBannerPropsType {}

const CarouselBanner = ({}: CarouselBannerPropsType) => {
  return (
    <Carousel>
      <CarouselContent>
        {carousel.map((item) => (
          <CarouselItem key={item.id}>
            <Image src={item.image} alt="banner" width={1920} height={560} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default CarouselBanner;
