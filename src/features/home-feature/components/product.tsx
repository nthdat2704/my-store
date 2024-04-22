import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface ProductPropsType {
  id: number;
  name: string;
  image: string;
  price: number;
  salePrice: number;
}

const Product = ({ image, id, name, price, salePrice }: ProductPropsType) => {
  return (
    <div>
      <Link href={`/product/${id}`}>
        <div>
          <Image src={image} width={300} height={300} alt="product" />
        </div>
        <div>
          <h3>{name}</h3>
          <div>
            <span>{price}</span>
            <span>{salePrice}</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Product;
