import Dashboard from 'components/Dashboard/Dashboard';
import { ProductContextProvider } from 'context/ProductsContext';
import { NextPage } from 'next';

const HomePage: NextPage = () => {
  return (
    <ProductContextProvider>
      <div className="App-header">
        <div className="App-header-title">Mayoral</div>
      </div>
      <section>
        <Dashboard />
      </section>
    </ProductContextProvider>
  );
};

export default HomePage;
