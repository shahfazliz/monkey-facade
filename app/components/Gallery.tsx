import { ReactNode } from "react";

interface Props {
    children: ReactNode;
    galleryStyles?: string;
}

const Gallery = ({ children, galleryStyles }: Props) => {
  return <section className={galleryStyles}>
    { children }
  </section>;
};

export default Gallery;