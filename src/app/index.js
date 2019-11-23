import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {
  ProductsList,
  PageNotFound,
  Create,
  Home,
  SingleProduct,
  Edit
} from "./pages";
import { Layout } from "./components";

class App extends React.Component {
  state = {
    products: [
      {
        name: "Alus",
        id: "1",
        ean: 1234567891012,
        type: "liquid",
        weight: 500,
        color: "brown",
        isActive: true,
        quantity: 10,
        price: 3,
        isEdit: false,
        priceHistory: [3],
        quantityHistory: [10]
      },
      {
        name: "Vynas",
        id: "2",
        ean: 1234567891013,
        type: "liquid",
        weight: 700,
        color: "red",
        isActive: false,
        quantity: 1,
        price: 7,
        isEdit: false,
        priceHistory: [7],
        quantityHistory: [1]
      },
      {
        name: "Sidras",
        id: "3",
        ean: 1234567891014,
        type: "liquid",
        weight: 1000,
        color: "eyellow",
        isActive: true,
        quantity: 7,
        price: 5,
        isEdit: false,
        priceHistory: [5],
        quantityHistory: [7]
      }
    ],
    error: null
  };

  toggleActive = id => {
    const { products } = this.state;
    const changedProducts = products.map(product => {
      if (product.id === id) {
        product.isActive = !product.isActive;
      }
      return product;
    });
    this.setState({ products: changedProducts });
  };
  enableEdit = id => {
    const { products } = this.state;
    if (products.some(product => product.isEdit)) {
      this.setState({ products: products });
    } else {
      const changedProducts = products.map(product => {
        if (product.id === id) {
          product.isEdit = true;
        }
        return product;
      });
      this.setState({ products: changedProducts });
    }
  };
  deleteProduct = removeId => {
    this.setState(state => {
      return { products: state.products.filter(({ id }) => id !== removeId) };
    });
  };
  saveEditedFromList = (id, newQuantity, newPrice) => {
    const { products } = this.state;
    const changedProducts = products.map(product => {
      if (product.id === id) {
        product.isEdit = false;
        const newPriceStory = product.priceHistory;
        const newQuantityStory = product.quantityHistory;
        if (newPrice && Number(newPrice) !== product.price) {
          newPriceStory.push(Number(newPrice));
          product.price = Number(newPrice);
          if (newPriceStory.length > 5) {
            newPriceStory.shift();
          }
        }
        if (newQuantity && Number(newQuantity) !== product.quantity) {
          newQuantityStory.push(Number(newQuantity));
          product.quantity = Number(newQuantity);
          if (newQuantityStory.length > 5) {
            newQuantityStory.shift();
          }
        }
      }
      return product;
    });
    this.setState({ products: changedProducts });
  };
  saveEditedFromEdit = (
    id,
    newName,
    newEan,
    newType,
    newWeight,
    newColor,
    newQuantity,
    newPrice
  ) => {
    const { products } = this.state;
    const changedProducts = products.map(product => {
      if (product.id === id) {
        product.isEdit = false;
        product.name = newName ? newName : product.name;
        product.ean = newEan ? Number(newEan) : product.ean;
        product.type = newType ? newType : product.type;
        product.weight = newWeight ? newWeight : product.weight;
        product.color = newColor ? newColor : product.color;
        const newPriceStory = product.priceHistory;
        const newQuantityStory = product.quantityHistory;
        if (newPrice && Number(newPrice) !== product.price) {
          newPriceStory.push(Number(newPrice));
          product.price = Number(newPrice);
          if (newPriceStory.length > 5) {
            newPriceStory.shift();
          }
        }
        if (newQuantity && Number(newQuantity) !== product.quantity) {
          newQuantityStory.push(Number(newQuantity));
          product.quantity = Number(newQuantity);
          if (newQuantityStory.length > 5) {
            newQuantityStory.shift();
          }
        }
      }
      return product;
    });
    this.setState({ products: changedProducts });
  };
  addNewProduct = (
    newId,
    newName,
    newEan,
    newType,
    newWeight,
    newColor,
    newQuantity,
    newPrice
  ) => {
    const { products, error } = this.state;
    const changedProducts = products;
    let newProduct = {};
    let IdError = error;
    console.log(IdError);
    if (products.some(product => product.id === newId)) {
      IdError = "this Id is already in use";
      this.setState({ products: changedProducts, error: IdError });
    } else {
      newProduct.name = newName;
      newProduct.id = newId;
      newProduct.ean = Number(newEan);
      newProduct.type = newType;
      newProduct.weight = newWeight;
      newProduct.color = newColor;
      newProduct.isActive = false;
      newProduct.quantity = Number(newQuantity);
      newProduct.price = Number(newPrice);
      newProduct.isEdit = false;
      newProduct.priceHistory = [Number(newPrice)];
      newProduct.quantityHistory = [Number(newQuantity)];
      changedProducts.push(newProduct);
      this.setState({ products: changedProducts });
    }
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
              render={() => (
                <ProductsList
                  products={products}
                  error={error}
                  toggleActive={this.toggleActive}
                  deleteProduct={this.deleteProduct}
                  enableEdit={this.enableEdit}
                  saveEditedFromList={this.saveEditedFromList}
                />
              )}
            />
            <Route path="/" exact component={Home} />
            <Route
              path="/products/create"
              exact
              render={() => (
                <Create error={error} addNewProduct={this.addNewProduct} />
              )}
            />

            <Route
              path="/products/:id"
              exact
              render={props => {
                const { id } = props.match.params;
                const product =
                  products.find(product => product.id === id) || {};
                return <SingleProduct {...props} product={product} />;
              }}
            />
            <Route
              path="/products/:id/edit"
              exact
              render={props => {
                const { id } = props.match.params;
                const product =
                  products.find(product => product.id === id) || {};
                return (
                  <Edit
                    {...props}
                    product={product}
                    toggleActive={this.toggleActive}
                    saveEditedFromEdit={this.saveEditedFromEdit}
                  />
                );
              }}
            />
            <Route component={PageNotFound} />
          </Switch>
        </Layout>
      </Router>
    );
  }
}

export default App;
