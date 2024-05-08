import React from 'react';
import { CustomButton } from '@/components/Button/CustomButton';
import { Product } from 'types/product';

import {
  CardBodyStyle,
  CardDescriptionStyle,
  CardImgStyle,
  CardImgContainerStyle,
  CardPriceStyle,
  CardTitleStyle,
  CardAddStyle,
} from './Card.styles';

interface CardProps {
  product?: Product;
}

function Card(props: CardProps) {
  const { title, price, image } = props.product;

  const handleAddProduct = () => {
    console.log('product added');
  };

  return (
    <div aria-label="Card container">
      <CardImgContainerStyle aria-label="Card image">
        <CardImgStyle aria-label="image" alt="product picture" src={image} />
      </CardImgContainerStyle>
      <CardBodyStyle aria-label="Card body">
        <CardTitleStyle aria-label="Card body title"> {title}</CardTitleStyle>
        <CardPriceStyle aria-label="Card body price">{price} EUR</CardPriceStyle>
        <CardDescriptionStyle aria-label="Card body description">más colores</CardDescriptionStyle>
        <CardAddStyle aria-label="Card add">
          <CustomButton handleClick={handleAddProduct}>Añadir</CustomButton>
        </CardAddStyle>
      </CardBodyStyle>
    </div>
  );
}

export default Card;
