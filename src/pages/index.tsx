import Dashboard from 'components/Dashboard/Dashboard';
import { ProductContextProvider } from 'context/ProductsContext';
import { NextPage } from 'next';
import Image from 'next/image';
import styled from 'styled-components';

const HeaderStyle = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px;
`;

const HomePage: NextPage = () => {
  return (
    <ProductContextProvider>
      <HeaderStyle>
        <Image src="/mayoral.png" width={130} height={32} aria-label="Mayoral logo" />
      </HeaderStyle>
      <section>
        <Dashboard />
      </section>
    </ProductContextProvider>
  );
};

export default HomePage;
