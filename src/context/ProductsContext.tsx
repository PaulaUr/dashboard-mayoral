import { createContext, useEffect, useState } from 'react';
import { getProducts } from '../services/fetchProducts';
import { Category } from '../services/ProductsApiResponse';

export enum Sort {
  Desc = 'desc',
  Asc = 'asc',
}

export type ProductDataType = {
  id: number;
  category: string;
  description: string;
  image: string;
  price: number;
  title: string;
};

export type ProductContextType = {
  products: ProductDataType[];
  setProducts: React.Dispatch<React.SetStateAction<ProductDataType[]>>;
  handleFetch: () => Promise<void>;
};

const ProductsContext = createContext<ProductContextType | undefined>(undefined);

const ProductContextProvider = ({ children }) => {
  const [products, setProducts] = useState<ProductDataType[]>([]);

  const handleFetch = async () => {
    try {
      const response = await getProducts();
      if (!response.ok) {
        throw new Error('Failed to fetch products');
      }
      const data = await response.json();
      setProducts(data);
    } catch (error: unknown) {
      console.error('Error fetching products:', error);
    }
  };

  useEffect(() => {
    handleFetch();
  }, []);

  return (
    <ProductsContext.Provider value={{ products, setProducts, handleFetch }}>
      {children}
    </ProductsContext.Provider>
  );
};

export { ProductsContext, ProductContextProvider };
