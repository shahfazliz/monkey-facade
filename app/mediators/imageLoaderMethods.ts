'use client';

interface Props {
  src: string
  width: number
}

/**
 * @author Jor-El
 * @module app/mediators/imageLoaderMethods.ts
 * @description Returns a placeholder image URL for the given image source and width.
 * @param {IImagePlaceholderProps} props The properties of the image placeholder.
 * @returns {string} The URL of the placeholder image.
 * @example
 * const placeholderUrl = imagePlaceholderLoader({
 *   src: 'https://example.com/image.jpg',
 *   width: 200,
 * });
 * console.log(placeholderUrl); // 'https://via.assets.so/https://example.com/image.jpg?w=200&h=100&tc=grey&bg=#cecece'
 */
const imagePlaceholderLoader = ({ src, width }: Props): string => {
  return `https://via.assets.so/${src}?w=${width}&h=${width * 0.5}&tc=grey&bg=#cecece`;
};

export { imagePlaceholderLoader };
