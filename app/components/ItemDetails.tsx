// Path: app/components/ItemDetails.tsx
'use client';
import Image from 'next/image';
import { imagePlaceholderLoader } from '../mediators/imageLoaderMethods';
import React, { type ReactNode } from 'react';
import Slider from '../adapters/Slider';

interface Props {
  title: string
  description: string
  images: string[]
  price: number
  onClick: () => void
}

const ItemDetails = ({ title, description, images, price, onClick }: Props): ReactNode => {
  return (
    <div className="max-w-10xl mx-auto p-6 bg-white shadow-lg rounded-lg flex">
      {/* Left side: Image */}
      <div className="flex-shrink-0 mr-6">
        <Slider>
          {images.map((image, index) => (
            <Image
              key={index}
              className="w-full h-full object-cover transition-transform ease-in-out duration-300 transform"
              loader={imagePlaceholderLoader}
              src={image}
              alt={`${title} - Image ${index + 1}`}
              width={600}
              height={300}
            />
          ))}
        </Slider>
      </div>

      {/* Right side: Title, Description, Price, Add to Cart */}
      <div>
        <h1 className="text-3xl font-semibold mb-4">{title}</h1>
        <p className="text-gray-600 mb-4">{description}</p>

        <p className="text-xl font-bold mb-4">Price: ${price}</p>

        <button className="bg-blue-500 text-white px-4 py-2 mr-4 hover:bg-blue-700" onClick={onClick}>Add to Cart</button>
      </div>
    </div>
  );
};

export default ItemDetails;
