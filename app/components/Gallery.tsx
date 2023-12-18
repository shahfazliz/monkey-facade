import React, { type ReactNode } from 'react';

interface Props {
  children: ReactNode
  galleryStyles?: string
}

/**
 * @author Jor-El
 * @module app/components/Gallery.tsx
 * @description Functional React component that displays a gallery of components.
 * @param {ReactNode} children The components to display in the gallery.
 * @param {string} galleryStyles The CSS class to apply to the gallery.
 * @returns {ReactNode} - A React component that displays a gallery of images.
 * @example
 * ```
 * <Gallery galleryStyle="">
 *  <img src="..." />
 *  <img src="..." />
 *  <img src="..." />
 * </Gallery>;
 * ```
 */
const Gallery = ({ children, galleryStyles }: Props): ReactNode => {
  return <section className={galleryStyles}>
    { children }
  </section>;
};

export default Gallery;
