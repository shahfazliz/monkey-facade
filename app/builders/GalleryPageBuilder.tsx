'use client';
import { Flex } from '@mantine/core';
import { handleOnClickRoute } from '../mediators/routingMethods';
import CardBuilder from './CardBuilder';
import React, { type ReactNode } from 'react';

const CARD_NUMBER = 10;

const LOREM = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisl vitae aliquam tincidunt, nunc nisl aliquet nunc, vitae aliquam nisl nunc vitae nisl.';

/**
 * @author Jor-El
 * @module app/builders/GalleryPageBuilder.tsx
 * @description Component that builds a gallery of cards.
 * @param {string} galleryStyles - The styles to be applied to the gallery.
 * @returns {ReactNode} - The gallery component.
 * @example
 * <Gallery galleryStyles={galleryStyles}>
 *   {
 *     Array
 *       .from(Array(CARD_NUMBER).keys())
 *       .map((_, index) => (
 *         <CardBuilder
 *           key={index}
 *           title='Card Title'
 *           description='This is a simple card with some description.'
 *           onClick={handleOnClickRoute({route: '/item_details', id: index})}
 *         />
 *       ))
 *   }
 * </Gallery>
*/
const GalleryPageBuilder = (): ReactNode => {
  return (
    <Flex
      mih={50}
      gap="md"
      justify="flex-start"
      align="flex-start"
      direction="row"
      wrap="wrap"
    >
      {
        Array
          .from(Array(CARD_NUMBER).keys())
          .map((_, index) => (
            <CardBuilder
              key={index}
              title='Card Title'
              description={LOREM}
              onClick={handleOnClickRoute({ route: '/item_details', id: index })}
            />
          ))
      }
    </Flex>
  );
};

export default GalleryPageBuilder;
