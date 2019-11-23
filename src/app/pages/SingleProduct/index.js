import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink
} from "react-router-dom";
import "./index.scss";
import { ProductDetails, PriceHistory, QuantityHistory } from "./subpages";

function SingleProduct(props) {
  console.log(props.match.url);

  // if (!product) {
  //   return <Redirect to="/products" />;
  // }

  return (
    <Router>
      <div className="SingleProduct">
        <header className="SingleProduct--header">
          <nav className="SingleProduct--header--navigation">
            <NavLink
              exact
              className="SingleProduct--header--navigation-item"
              to={`${props.match.url}/ProductDetails`}
            >
              Product Details{" "}
            </NavLink>

            <NavLink
              exact
              className="SingleProduct--header--navigation-item"
              to={`${props.match.url}/PriceHistory`}
            >
              Price History
            </NavLink>

            <NavLink
              exact
              className="SingleProduct--header--navigation-item"
              to={`${props.match.url}/QuantityHistory`}
            >
              Quantity History{" "}
            </NavLink>
          </nav>
        </header>

        <Switch>
          <Route
            path={`${props.match.path}/ProductDetails`}
            exact
            render={() => <ProductDetails {...props} product={props.product} />}
          />
          <Route
            path={`${props.match.path}/PriceHistory`}
            component={PriceHistory}
          />
          <Route
            path={`${props.match.path}/QuantityHistory`}
            component={QuantityHistory}
          />
        </Switch>
      </div>
    </Router>
  );
}

export default SingleProduct;
