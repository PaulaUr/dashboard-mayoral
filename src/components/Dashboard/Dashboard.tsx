import { CustomButton } from '@/components/Button/CustomButton';
import Card from '@/components/Card/Card';
import { SearchBar } from '@/components/Search/SearchBar';
import React, { useContext } from 'react';
import {
  DashboardCardContainerStyle,
  DashboardContainerStyle,
  DashboardHeaderStyle,
} from './Dashboard.styles';
import Image from 'next/image';
import { ProductsContext, Sort } from '../../context/ProductsContext';

const Dashboard = () => {
  const { products, setProducts, handleFetch } = useContext(ProductsContext);

  const handleChange = (e) => {
    const searchField = e.target.value;

    if (searchField !== '') {
      const newArray = products.filter((product) =>
        product.title.toLowerCase().includes(e.target.value.toLowerCase()),
      );
      setProducts(newArray);
    } else {
      handleFetch();
    }
  };

  const handleSort = (sort: Sort) => {
    if (sort === Sort.Asc) {
      const arrayOrdered = [...products].sort((a, b) => b.price - a.price);
      setProducts(arrayOrdered);
    } else {
      const arrayOrdered = [...products].sort((a, b) => a.price - b.price);
      setProducts(arrayOrdered);
    }
  };

  return (
    <div aria-label="Dashboard">
      <DashboardHeaderStyle>
        <SearchBar placeholder="Search" handleChange={handleChange} />
        <CustomButton style={{ padding: 0 }} handleClick={() => handleSort(Sort.Desc)}>
          <Image
            src="/arrow-down.png"
            width={24}
            height={24}
            className="hidden md:block"
            aria-label="Arrow down image"
          />
        </CustomButton>
        <CustomButton style={{ padding: 0 }} handleClick={() => handleSort(Sort.Asc)}>
          <Image
            src="/arrow-up.png"
            width={24}
            height={24}
            className="hidden md:block"
            aria-label="Arrow up image"
          />
        </CustomButton>
      </DashboardHeaderStyle>
      <DashboardContainerStyle>
        {products.map((product) => (
          <DashboardCardContainerStyle
            aria-label="Dashboard with products"
            key={product.id.toString()}
          >
            <Card product={product} />
          </DashboardCardContainerStyle>
        ))}
      </DashboardContainerStyle>
    </div>
  );
};

export default Dashboard;
