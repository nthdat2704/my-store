import Product from '@/features/home-feature/components/product';
import { listProduct } from '@/features/home-feature/constants/products';
import React from 'react';

interface DetailPropsType {
  params: { slug: any };
}

export const generateStaticParams = async () => {
  return listProduct.map((product) => ({ slug: `${product.id}` }));
};

const Detail = async ({ params }: DetailPropsType) => {
  const slug = params.slug;
  console.log('slug', slug);

  return <div>kaka {slug}</div>;
};

export default Detail;
