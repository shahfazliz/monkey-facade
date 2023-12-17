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

/**
 * @author Jor-El
 * @description A simple card component that can be used to display information.
 * @param {string} title The title of the card.
 * @param {string} description The description of the card.
 * @param {string} cardStyles The styles for the card.
 * @param {string} imageStyles The styles for the image.
 * @param {string} contentStyles The styles for the content.
 * @param {string} titleStyles The styles for the title.
 * @param {string} descriptionStyles The styles for the description.
 * @param {() => void} onClick The function to be called when the card is clicked.
 * @returns {ReactNode} A React component.
 * @example
 * <Card
 *   title="Card Title"
 *   description="This is a simple card with some description."
 *   images={['img.jpg', 'img.jpg', 'img.jpg', 'img.jpg']}
 *   price={100}
 *   onClick={() => { console.log('Clicked!'); }}
 * />
 */
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
