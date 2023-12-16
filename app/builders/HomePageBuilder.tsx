import ProductCardBuilder from '../builders/ProductCardBuilder';
import NavBuilder from '../builders/NavBuilder'
import GalleryPageBuilder from '../builders/GalleryPageBuilder';

const HomePageBuilder = (): JSX.Element => {
  return (
    <main>
      <NavBuilder />
      <ProductCardBuilder />
      <GalleryPageBuilder />
    </main>
  )
};

export default HomePageBuilder;