// Path: app/adapters/Slider.tsx
import React, { type ReactNode, useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';

interface Props {
  children: ReactNode[]
}

/**
 * @author Shahfazliz Shahron
 * @props {React.ReactNode[]} children - An array of React elements to be displayed in the slider.
 * @description This component displays a horizontal slider for navigating through a sequence of child elements. Users can navigate through the children using the left and right arrow buttons. The current child is highlighted in the slider.
 * @returns {React.ComponentElement} A React component that renders the slider with navigation controls.
 * @example
 * ```jsx
 * <Slider>
 *   <Image src="image1.jpg" alt="First image" />
 *   <Image src="image2.jpg" alt="Second image" />
 *   <Image src="image3.jpg" alt="Third image" />
 * </Slider>
 * ```
 */
const Slider = ({ children }: Props): ReactNode => {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = (): void => {
    setCurrentImage((prev) => (prev + 1) % children.length);
  };

  const prevImage = (): void => {
    setCurrentImage((prev) => (prev - 1 + children.length) % children.length);
  };

  return (
    <div className="relative w-full h-64 overflow-hidden">
      { children[currentImage] }
      <button
        onClick={prevImage}
        className="absolute top-1/2 left-4 -translate-y-1/2 text-white focus:outline-none"
      >
        <ChevronLeftIcon className="w-6 h-6" />
      </button>
      <button
        onClick={nextImage}
        className="absolute top-1/2 right-4 -translate-y-1/2 text-white focus:outline-none"
      >
        <ChevronRightIcon className="w-6 h-6" />
      </button>
    </div>
  );
};

export default Slider;
