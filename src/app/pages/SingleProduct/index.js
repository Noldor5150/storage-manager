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
              Product Details
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
              Quantity History
            </NavLink>
          </nav>
        </header>
        <Switch>
          <Route
            path={`${props.match.path}/ProductDetails`}
            exact
            render={() => <ProductDetails product={props.product} />}
          />
          <Route
            path={`${props.match.path}/PriceHistory`}
            exact
            render={() => <PriceHistory product={props.product} />}
          />
          <Route
            path={`${props.match.path}/QuantityHistory`}
            exact
            render={() => <QuantityHistory product={props.product} />}
          />
        </Switch>
      </div>
    </Router>
  );
}
export default SingleProduct;
