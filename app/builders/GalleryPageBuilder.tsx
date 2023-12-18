'use client';
import React, { type ReactNode } from 'react';
import Gallery from '../components/Gallery';
import CardBuilder from './CardBuilder';
import { handleOnClickRoute } from '../mediators/routingMethods';

const CARD_NUMBER = 10;
const galleryStyles = 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4';

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
  return <Gallery galleryStyles={galleryStyles}>
    {
      Array
        .from(Array(CARD_NUMBER).keys())
        .map((_, index) => (
          <CardBuilder
            key={index}
            title='Card Title'
            description='This is a simple card with some description.'
            onClick={handleOnClickRoute({ route: '/item_details', id: index })}
          />
        ))
    }
  </Gallery>;
};

export default GalleryPageBuilder;
