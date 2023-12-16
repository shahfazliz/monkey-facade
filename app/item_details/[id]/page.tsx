import { ReactNode } from 'react';
import ItemDetailsBuilder from '../../builders/ItemDetailsBuilder';

interface Props {
  params: {
    id: string;
  };
  // searchParams: any;
}

const ItemDetailsPage = ({ params }: Props): ReactNode => {
  return <ItemDetailsBuilder id={params.id} />
};

export default ItemDetailsPage;