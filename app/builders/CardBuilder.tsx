// Path: app/builders/CardBuilder.tsx
import React, { type ReactNode } from 'react';
import Card from '../components/Card';

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
      cardStyles={cardStyles}
      imageStyles={imageStyles}
      contentStyles={contentStyles}
      titleStyles={titleStyles}
      descriptionStyles={descriptionStyles}
      title={title}
      description={description}
      onClick={onClick}
    />
  );
};

export default CardBuilder;
