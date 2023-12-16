type ProductCardProps = {
  Button1?: JSX.Element;
  Button2?: JSX.Element;
  Button3?: JSX.Element;
};

const ProductCard = ({ Button1, Button2, Button3 }: ProductCardProps) => {
  return (
    <>
      {Button1}
      {Button2}
      {Button3}
    </>
  );
};

export default ProductCard;