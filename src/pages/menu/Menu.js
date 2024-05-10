import React from 'react';
import Card from '../../components/Card/Card';
import { products } from '../../utils/products';
import { MenuContainer } from './styledMenu';

export const Menu = () => {
  return (
    <MenuContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {products.map((product) => (
        <Card key={product.id} product={product}/>
      ))}
    </MenuContainer>
  );
};

