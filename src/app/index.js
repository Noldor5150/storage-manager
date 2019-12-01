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
    products: [],
    error: null
  };
  componentDidMount() {
    const products = JSON.parse(localStorage.getItem("products"));
    if (products) {
      this.setState({ products: products, error: null });
    } else {
      this.setState({
        ...this.state,
        error: "Ooops! Monkeys stole our products! 😱👟, create new ones"
      });
    }
  }
  componentDidUpdate() {
    if (this.state.products.length > 0 && this.state.error) {
      localStorage.setItem("products", JSON.stringify(this.state.products));
      this.setState({ ...this.state, error: null });
    }
  }
  toggleActive = id => {
    const { products } = this.state;
    const changedProducts = products.map(product => {
      if (product.id === id) {
        product.isActive = !product.isActive;
      }
      return product;
    });
    this.setState({ products: changedProducts }, () =>
      localStorage.setItem("products", JSON.stringify(this.state.products))
    );
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
    this.setState(
      state => {
        return { products: state.products.filter(({ id }) => id !== removeId) };
      },
      () =>
        localStorage.setItem("products", JSON.stringify(this.state.products))
    );
  };
  saveEditedFromList = (id, newQuantity, newPrice) => {
    const { products } = this.state;
    const changedProducts = products.map(product => {
      if (product.id === id) {
        product.isEdit = false;
        const newPriceStory = product.priceHistory;
        const newQuantityStory = product.quantityHistory;
        const newPriceTimeChange = product.priceTimeChange;
        const newQuantityTimeChange = product.quantityTimeChange;
        if (newPrice && Number(newPrice) !== product.price) {
          newPriceStory.push(Number(newPrice));
          product.price = Number(newPrice);
          if (newPriceStory.length > 5) {
            newPriceStory.shift();
          }
          newPriceTimeChange.push(new Date());
          if (newPriceTimeChange.length > 5) {
            newPriceTimeChange.shift();
          }
        }
        if (newQuantity && Number(newQuantity) !== product.quantity) {
          newQuantityStory.push(Number(newQuantity));
          product.quantity = Number(newQuantity);
          if (newQuantityStory.length > 5) {
            newQuantityStory.shift();
          }
          newQuantityTimeChange.push(new Date());
          if (newQuantityTimeChange.length > 5) {
            newQuantityTimeChange.shift();
          }
        }
      }
      return product;
    });
    this.setState({ products: changedProducts }, () =>
      localStorage.setItem("products", JSON.stringify(this.state.products))
    );
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
        const newPriceTimeChange = product.priceTimeChange;
        const newQuantityTimeChange = product.quantityTimeChange;
        if (newPrice && Number(newPrice) !== product.price) {
          newPriceStory.push(Number(newPrice));
          product.price = Number(newPrice);
          if (newPriceStory.length > 5) {
            newPriceStory.shift();
          }
          newPriceTimeChange.push(new Date());
          if (newPriceTimeChange.length > 5) {
            newPriceTimeChange.shift();
          }
        }
        if (newQuantity && Number(newQuantity) !== product.quantity) {
          newQuantityStory.push(Number(newQuantity));
          product.quantity = Number(newQuantity);
          if (newQuantityStory.length > 5) {
            newQuantityStory.shift();
          }
          newQuantityTimeChange.push(new Date());
          if (newQuantityTimeChange.length > 5) {
            newQuantityTimeChange.shift();
          }
        }
      }
      return product;
    });
    this.setState({ products: changedProducts }, () =>
      localStorage.setItem("products", JSON.stringify(this.state.products))
    );
  };
  addNewProduct = newProduct => {
    this.setState(
      {
        ...this.state,
        products: [...this.state.products, newProduct]
      },
      () =>
        localStorage.setItem("products", JSON.stringify(this.state.products))
    );
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
                <Create
                  error={error}
                  addNewProduct={this.addNewProduct}
                  products={products}
                />
              )}
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
            <Route
              path="/products/:id"
              render={props => {
                const { id } = props.match.params;
                const product =
                  products.find(product => product.id === id) || {};
                return <SingleProduct {...props} product={product} />;
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
