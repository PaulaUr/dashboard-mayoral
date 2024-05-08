import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import Dashboard from '@/components/Dashboard/Dashboard';
import { ProductContextType, ProductDataType, ProductsContext } from '../context/ProductsContext';

const mockProductsData: ProductDataType[] = [
  {
    id: 1,
    title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
    price: 109.95,
    description:
      'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
    category: "men's clothing",
    image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
  },
];
const _productEmptyContext = {
  products: [],
  setProducts: jest.fn(),
  handleFetch: jest.fn(),
} as ProductContextType;

const _productContext = {
  products: mockProductsData,
  setProducts: jest.fn(),
  handleFetch: jest.fn(),
} as ProductContextType;

describe('Dashboard', () => {
  it('Should render Dashboard component when there are data in context', () => {
    const { getByLabelText } = render(
      <ProductsContext.Provider value={_productEmptyContext}>
        <Dashboard />
      </ProductsContext.Provider>,
    );

    const dashboardComponent = getByLabelText('Dashboard');
    expect(dashboardComponent).toBeInTheDocument();
  });

  it('Should render search input and icons buttons', () => {
    const { getByLabelText, getByRole } = render(
      <ProductsContext.Provider value={_productEmptyContext}>
        <Dashboard />
      </ProductsContext.Provider>,
    );

    const searchInput = getByLabelText('Search-bar');
    const arrowDownIcon = getByRole('img', { name: 'Arrow down image' });
    const arrowUpIcon = getByRole('img', { name: 'Arrow up image' });

    expect(searchInput).toBeInTheDocument();
    expect(arrowDownIcon).toBeInTheDocument();
    expect(arrowUpIcon).toBeInTheDocument();
  });

  it('Should render Dashboard component with products', () => {
    const { getByLabelText } = render(
      <ProductsContext.Provider value={_productContext}>
        <Dashboard />
      </ProductsContext.Provider>,
    );

    const conatainerWithProducts = getByLabelText('Dashboard with products');

    expect(conatainerWithProducts).toBeInTheDocument();
  });
});
