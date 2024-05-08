import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Product } from 'types/product';
import Card from '@/components/Card/Card';

const productsMock: Product[] = [
  {
    id: 13,
    title: 'Recycled Concrete Computer',
    price: 461,
    description:
      'The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive',
    image: 'https://api.lorem.space/image?w=640&h=480&r=5113',
    category: 'Others',
  },
  {
    id: 14,
    title: 'Luxurious Plastic Keyboard',
    price: 73,
    description: 'The Football Is Good For Training And Recreational Purposes',
    image: 'https://api.lorem.space/image/furniture?w=640&h=480&r=4855',
    category: 'Furniture',
  },
];
describe('Card component', () => {
  it('Should render the Card component', () => {
    const props = {
      products: productsMock[0],
    };
    const { getByLabelText } = render(<Card product={props.products} />);

    const CardComponent = getByLabelText('Card container');
    expect(CardComponent).toBeInTheDocument();
  });

  it('Should render the image field', () => {
    const props = {
      products: productsMock[1],
    };
    const { getByRole } = render(<Card product={props.products} />);

    const imageInCard = getByRole('img', { name: 'image' });
    expect(imageInCard).toBeInTheDocument();
  });

  it('Should render Card body', () => {
    const props = {
      products: productsMock[1],
    };
    const { getByLabelText, queryByLabelText } = render(<Card product={props.products} />);

    const CardComponent = getByLabelText('Card body');
    const titleInCard = queryByLabelText(props.products.title);
    const priceInCard = queryByLabelText(props.products.price);

    expect(CardComponent).toBeInTheDocument();
    expect(titleInCard).not.toBeInTheDocument();
    expect(priceInCard).not.toBeInTheDocument();
  });
});
