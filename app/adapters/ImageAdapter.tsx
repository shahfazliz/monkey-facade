import { Image as ImageMantine, type ImageProps } from '@mantine/core';
import React, { type ReactNode } from 'react';
import Image from 'next/image';

interface Props extends ImageProps {
  alt: string
  height: number
  loader: ({ src, width }: { src: string, width: number }) => string
  priority: boolean
  width: number
};

const ImageAdapter = ({ alt, loader, ...props }: Props): ReactNode => {
  return (
    <ImageMantine
      component={Image}
      alt={alt}
      loader={loader}
      {...props}
    />
  );
};

export { ImageAdapter as Image };
