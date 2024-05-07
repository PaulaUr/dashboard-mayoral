import React, { useEffect, useState } from 'react';
import { Product } from 'types/product';
import noImage from '../../assets/noImage.png';
import styles from './Card.module.css';
import {
  CardBodyStyle,
  CardDescriptionStyle,
  CardImgStyle,
  CardImgContainerStyle,
  CardPriceStyle,
  CardTitleStyle,
  CardAddStyle,
  CardAddButtonStyle,
} from './Card.styles';

type bodyDependingOnLayoutType = {
  [key: string]: boolean;
};

interface CardProps {
  product?: Product;
}

const urlRegex =
  /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/;

function Card(props: CardProps) {
  const { title, price, description, images } = props.product;
  //   const [showBody, setShowBody] = useState<boolean>(true);

  const validImageUrl = (urlValue: string) => urlRegex.test(urlValue);

  return (
    <React.Fragment>
      <CardImgContainerStyle aria-label="Card image">
        <CardImgStyle aria-label="image" alt="robots" src={images[0]} />
      </CardImgContainerStyle>
      <CardBodyStyle aria-label="Card body">
        <CardTitleStyle aria-label="Card body title"> {title}</CardTitleStyle>
        <CardPriceStyle aria-label="Card body price">{price} EUR</CardPriceStyle>
        <CardDescriptionStyle aria-label="Card body description">más colores</CardDescriptionStyle>
        <CardAddStyle aria-label="Card add">
          <CardAddButtonStyle>Añadir</CardAddButtonStyle>
        </CardAddStyle>
      </CardBodyStyle>
    </React.Fragment>
  );
}

export default Card;
