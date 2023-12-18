'use client';
import React, { type ReactNode, useEffect, useState } from 'react';
import AddToCartButtonBuilder from './AddToCartButtonBuilder';
import ProductCard from '../components/ProductCard';

const Button1: JSX.Element = <AddToCartButtonBuilder type='module' />;
const Button2: JSX.Element = <AddToCartButtonBuilder type='tailwind' />;
const Button3: JSX.Element = <AddToCartButtonBuilder type='daisyui' />;

/**
 * @author Jor-El
 * @module app/builders/ProductCardBuilder.tsx
 * @description A builder function that creates a ProductCard component.
 * @returns {ReactNode} The ProductCard component.
 * @example
 */
const ProductCardBuilder = (): ReactNode => {
  const [buttonState, setButtonState] = useState<JSX.Element | undefined>(undefined);

  useEffect(() => {
    const handleWindowSizeChange = (mediaQueryListEvent: MediaQueryListEvent): void => {
      const mediaQueryList = mediaQueryListEvent.currentTarget as MediaQueryList;

      if (mediaQueryList.matches) {
        // Set the button state based on the media query
        if (mediaQueryList.media === '(max-width: 300px)') {
          setButtonState(Button1);
        } else if (mediaQueryList.media === '(min-width: 301px) and (max-width: 700px)') {
          setButtonState(Button2);
        } else if (mediaQueryList.media === '(min-width: 701px)') {
          setButtonState(Button3);
        }
      }
    };

    const mediaQuery300px = window.matchMedia('(max-width: 300px)');
    const mediaQuery700px = window.matchMedia('(min-width: 301px) and (max-width: 700px)');
    const mediaQuery1000px = window.matchMedia('(min-width: 701px)');

    // Initial check on component mount
    handleWindowSizeChange({ currentTarget: mediaQuery300px } as unknown as MediaQueryListEvent);
    handleWindowSizeChange({ currentTarget: mediaQuery700px } as unknown as MediaQueryListEvent);
    handleWindowSizeChange({ currentTarget: mediaQuery1000px } as unknown as MediaQueryListEvent);

    // Add event listeners for changes
    mediaQuery300px.addListener(handleWindowSizeChange);
    mediaQuery700px.addListener(handleWindowSizeChange);
    mediaQuery1000px.addListener(handleWindowSizeChange);

    // Cleanup event listeners on component unmount
    return () => {
      mediaQuery300px.removeListener(handleWindowSizeChange);
      mediaQuery700px.removeListener(handleWindowSizeChange);
      mediaQuery1000px.removeListener(handleWindowSizeChange);
    };
  }, []);

  return (
    <ProductCard Button1={buttonState} />
  );
};

export default ProductCardBuilder;
