'use client';

const imagePlaceholderLoader = ({ src, width }: { src: string, width: number }) => {
  return `https://via.assets.so/${src}?w=${width}&h=${width * 0.5}&tc=grey&bg=#cecece`;
}

export { imagePlaceholderLoader }