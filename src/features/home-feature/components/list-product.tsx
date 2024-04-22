import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/shared/components/ui/carousel';
import React from 'react';
import { listProduct } from '../constants/products';
import Product from './product';
import useEmblaCarousel from 'embla-carousel-react';

interface ListProductPropsType {}

const getProducts = async () => {
  const response = listProduct;
  return response;
};

const ListProduct = async ({}: ListProductPropsType) => {
  const products = await getProducts();
  return (
    <Carousel>
      <CarouselContent>
        {products.map((item) => (
          <CarouselItem className="basis-1/4" key={item.id}>
            <Product {...item} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default ListProduct;
