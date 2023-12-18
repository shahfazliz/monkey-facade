import React, { type ReactNode } from 'react';
import ItemDetailsBuilder from '../../builders/ItemDetailsBuilder';

interface Props {
  params: {
    id: string
  }
  // searchParams: any
}

/**
 * @author Jor-El
 * @module app/item_details/[id]/page.tsx
 * @description This component renders the item details page.
 * @param {string} props.params.id The item ID.
 * @returns {ReactNode} The React component.
 * @example
 * <ItemDetailsPage id="1234" />
 */
const ItemDetailsPage = ({ params }: Props): ReactNode => {
  return <ItemDetailsBuilder id={params.id} />;
};

export default ItemDetailsPage;
