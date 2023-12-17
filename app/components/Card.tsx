// Path: app/components/Card.tsx
import Image from 'next/image';
import React, { type ReactNode } from 'react';
import { imagePlaceholderLoader } from '../mediators/imageLoaderMethods';

interface Props {
  cardStyles?: string
  imageStyles?: string
  contentStyles?: string
  titleStyles?: string
  descriptionStyles?: string
  title?: string
  description?: string
  onClick?: () => void
}

const Card = ({
  cardStyles,
  imageStyles,
  contentStyles,
  titleStyles,
  descriptionStyles,
  title,
  description,
  onClick
}: Props): ReactNode => {
  return (
    <div className={cardStyles} onClick={onClick}>
      <Image
        className={imageStyles}
        loader={imagePlaceholderLoader}
        src="img.jpg"
        alt="Card Image"
        width={300}
        height={300 * 0.5}
      />
      <div className={contentStyles}>
        <div className={titleStyles}>{title}</div>
        <div className={descriptionStyles}>{description}</div>
      </div>
    </div>
  );
};

export default Card;
