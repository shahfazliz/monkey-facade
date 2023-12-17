// Path: app/components/Gallery.tsx
import React, { type ReactNode } from 'react';

interface Props {
  children: ReactNode
  galleryStyles?: string
}

const Gallery = ({ children, galleryStyles }: Props): ReactNode => {
  return <section className={galleryStyles}>
    { children }
  </section>;
};

export default Gallery;
