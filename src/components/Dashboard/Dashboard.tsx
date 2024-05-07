import Card from 'components/Card/Card';
import { SearchBar } from 'components/Search/SearchBar';
import { ProductsContext } from 'context/ProductsContext';
import React, { useContext, useEffect, useReducer, useState } from 'react';
import { DashboardCardContainerStyle, DashboardContainerStyle } from './Dashboard.styles';

const Dashboard = () => {
  const { products, setProducts, handleFetch } = useContext(ProductsContext);

  const handleChange = (e) => {
    const searchField = e.target.value;
    console.log(e.target.value);

    if (searchField !== '') {
      const newArray = products.filter((product) =>
        product.title.toLowerCase().includes(e.target.value.toLowerCase()),
      );
      setProducts(newArray);
    } else {
      handleFetch();
    }
  };

  return (
    <>
      <SearchBar placeholder="Search" handleChange={handleChange} />
      <DashboardContainerStyle data-testid="Dashboard-component">
        {products.map((product) => (
          <DashboardCardContainerStyle
            aria-label="Dashboard card container"
            key={product.id.toString()}
          >
            <Card product={product} />
          </DashboardCardContainerStyle>
        ))}
      </DashboardContainerStyle>
    </>
  );
};

export default Dashboard;
