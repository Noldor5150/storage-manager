import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ProductsList, PageNotFound, Create, Home } from './pages';
import Layout from './components/Layout';

class App extends React.Component {
  state = {
    products: [
      {
        name: 'Alus',
        id: 1,
        ean: 1234567891012,
        type: 'liquid',
        weight: 500,
        color: 'brown',
        isActive: false,
        quantity: 10,
        price: 3,
      },
      {
        name: 'Vynas',
        id: 2,
        ean: 1234567891013,
        type: 'liquid',
        weight: 700,
        color: 'red',
        isActive: false,
        quantity: 1,
        price: 7,
      },
      {
        name: 'Sidras',
        id: 3,
        ean: 1234567891014,
        type: 'liquid',
        weight: 1000,
        color: 'eyellow',
        isActive: false,
        quantity: 7,
        price: 5,
      },
    ],
    error: null,
  };

  render() {
    const { products, error } = this.state;
    return (
      <Router>
        <Layout>
          <Switch>
            <Route
              path="/products"
              exact
              render={() => <ProductsList products={products} error={error} />}
            />
            <Route path="/" exact component={Home} />
            <Route path="/products/create" exact component={Create} />
            <Route component={PageNotFound} />
          </Switch>
        </Layout>
      </Router>
    );
  }
}

export default App;
