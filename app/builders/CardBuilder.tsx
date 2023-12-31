// Path: app/builders/CardBuilder.tsx
import React, { type ReactNode } from 'react';
import { Card } from '../adapters/CardAdapter';
import { imagePlaceholderLoader } from '../mediators/imageLoaderMethods';

const cardStyles = 'p-4 bg-white shadow-md rounded-md overflow-hidden';
const imageStyles = 'w-full h-auto border-b border-gray-300';
const contentStyles = 'p-4';
const titleStyles = 'text-lg font-semibold mb-2';
const descriptionStyles = 'text-sm text-gray-700';

interface Props {
  title?: string
  description?: string
  onClick?: () => void
}

/**
 * @author Jor-El
 * @description A React component for creating a basic card with title, description, and an optional onClick event.
 * @param {string} title The title of the card.
 * @param {string} description The description of the card.
 * @param {function} onClick The onClick event handler for the card.
 * @returns {ReactNode} The React component.
 * @example
 * const MyCard = () => {
 *   return (
 *     <CardBuilder
 *       title="Card Title"
 *       description="Card Description"
 *       onClick={() => {
 *         // Handle the onClick event.
 *       }}
 *     />
 *   );
 * };
 */
const CardBuilder = ({ title, description, onClick }: Props): ReactNode => {
  return (
    <Card
      title={title}
      description={`${description} ${description} ${description}`}
      onClick={onClick}
      imageLoader={imagePlaceholderLoader}
      imageAlt="Card Image"
      src="img.jpg"
      imageHeight={300 * 0.5}
      width={300}
    />
  );
};

export default CardBuilder;
