import React from "react";
import { Link } from "react-router-dom";
import { Button, TextField } from "@material-ui/core";
import "./index.scss";

class Create extends React.Component {
  state = {
    newProduct: {
      name: "",
      id: "",
      ean: "",
      type: "",
      weight: "",
      color: "",
      isActive: false,
      quantity: "",
      price: "",
      isEdit: false,
      priceHistory: [],
      quantityHistory: []
    },
    localError: {
      nameError: "field is empty",
      idError: "field is empty",
      eanError: "field is empty",
      typeError: "field is empty",
      weightError: "field is empty",
      colorError: "field is empty",
      quantityError: "field is empty",
      priceError: "field is empty"
    }
  };
  handleNameChange = event => {
    const { newProduct, localError } = this.state;
    const newObj = newProduct;
    const error = localError;
    newObj.name = event.target.value;
    if (newObj.name.length < 7 && newObj.name.length > 2) {
      error.nameError = null;
      this.setState({ newProduct: newObj, localError: error });
    } else if (newObj.name.length >= 7) {
      error.nameError = "to many charachters";
      this.setState({ newProduct: newObj, localError: error });
    } else {
      error.nameError = "name must be atleast 3 charachters";
      this.setState({ newProduct: newObj, localError: error });
    }
  };
  handleIdChange = event => {
    const { newProduct, localError } = this.state;
    const newObj = newProduct;
    const error = localError;
    newObj.id = event.target.value;
    if (this.props.products.some(product => product.id === newObj.id)) {
      error.idError = "this ID is already in use";
      this.setState({ newProduct: newObj, localError: error });
    } else if (newObj.id.length === 0) {
      error.idError = "can not be empty";
      this.setState({ newProduct: newObj, localError: error });
    } else {
      error.idError = null;
      this.setState({ newProduct: newObj, localError: error });
    }
  };
  handleEanChange = event => {
    const { newProduct, localError } = this.state;
    const newObj = newProduct;
    const error = localError;
    newObj.ean = event.target.value;
    if (newObj.ean.length === 13) {
      error.eanError = null;
      newObj.ean = Number(newObj.ean);
      this.setState({ newProduct: newObj, localError: error });
    } else {
      error.eanError = "ean must be exact 13 charachters";
      this.setState({ newProduct: newObj, localError: error });
    }
  };
  handleTypeChange = event => {
    const { newProduct, localError } = this.state;
    const newObj = newProduct;
    const error = localError;
    newObj.type = event.target.value;
    if (newObj.type.length < 7 && newObj.type.length > 2) {
      error.typeError = null;
      this.setState({ newProduct: newObj, localError: error });
    } else if (newObj.type.length >= 7) {
      error.typeError = "to many charachters";
      this.setState({ newProduct: newObj, localError: error });
    } else {
      error.typeError = "name must be atleast 3 charachters";
      this.setState({ newProduct: newObj, localError: error });
    }
  };
  handleWeightChange = event => {
    const { newProduct, localError } = this.state;
    const newObj = newProduct;
    const error = localError;
    newObj.weight = Number(event.target.value);
    if (newObj.weight >= 0 && newObj.weight <= 99999) {
      error.weightError = null;
      this.setState({ newProduct: newObj, localError: error });
    } else if (newObj.weight > 99999) {
      error.weightError = "we can not handle such weight";
      this.setState({ newProduct: newObj, localError: error });
    } else {
      error.weightError = "weight can not be negative or empty";
      this.setState({ newProduct: newObj, localError: error });
    }
  };
  handleColorChange = event => {
    const { newProduct, localError } = this.state;
    const newObj = newProduct;
    const error = localError;
    newObj.color = event.target.value;
    if (newObj.color.length < 9 && newObj.color.length > 2) {
      error.colorError = null;
      this.setState({ newProduct: newObj, localError: error });
    } else if (newObj.color.length >= 9) {
      error.colorError = "to many charachters";
      this.setState({ newProduct: newObj, localError: error });
    } else {
      error.colorError = "color must be atleast 3 charachters";
      this.setState({ newProduct: newObj, localError: error });
    }
  };
  handleQuantityChange = event => {
    const { newProduct, localError } = this.state;
    const newObj = newProduct;
    const error = localError;
    newObj.quantity = Number(event.target.value);
    if (newObj.quantity >= 0 && newObj.quantity <= 99999) {
      error.quantityError = null;
      newObj.quantityHistory = [newObj.quantity];
      this.setState({ newProduct: newObj, localError: error });
    } else if (newObj.quantity > 99999) {
      error.quantityError = "we can not handle such quantity";
      this.setState({ newProduct: newObj, localError: error });
    } else {
      error.quantityError = "quantity can not be negative or empty";
      this.setState({ newProduct: newObj, localError: error });
    }
  };
  handlePriceChange = event => {
    const { newProduct, localError } = this.state;
    const newObj = newProduct;
    const error = localError;
    newObj.price = Number(event.target.value);
    if (newObj.price >= 0 && newObj.price <= 9999) {
      error.priceError = null;
      newObj.priceHistory = [newObj.price];
      this.setState({ newProduct: newObj, localError: error });
    } else if (newObj.quantity > 9999) {
      error.priceError = "price is to big";
      this.setState({ newProduct: newObj, localError: error });
    } else {
      error.priceError = "price can not be negative or empty";
      this.setState({ newProduct: newObj, localError: error });
    }
  };
  handleClick = event => {
    if (!Object.values(this.state.localError).every(error => error === null))
      event.preventDefault();
  };
  render() {
    const { newProduct, localError } = this.state;
    return (
      <div className="Create">
        <TextField
          required
          type="text"
          margin="normal"
          label="Add name"
          id="standard-error-helper-text"
          error={localError.nameError ? true : false}
          helperText={localError.nameError}
          onChange={this.handleNameChange}
          value={newProduct.name}
        />
        <TextField
          required
          type="text"
          margin="normal"
          label="Add Id"
          id="standard-error-helper-text"
          error={localError.idError ? true : false}
          helperText={localError.idError}
          onChange={this.handleIdChange}
          value={newProduct.id}
        />
        <TextField
          required
          type="number"
          margin="normal"
          label="Add ean"
          id="standard-error-helper-text"
          error={localError.eanError ? true : false}
          helperText={localError.eanError}
          onChange={this.handleEanChange}
          value={newProduct.ean}
        />
        <TextField
          required
          type="text"
          margin="normal"
          label="Add type"
          id="standard-error-helper-text"
          error={localError.typeError ? true : false}
          helperText={localError.typeError}
          onChange={this.handleTypeChange}
          value={newProduct.type}
        />
        <TextField
          required
          type="number"
          margin="normal"
          label="Add weight"
          id="standard-error-helper-text"
          error={localError.weightError ? true : false}
          helperText={localError.weightError}
          onChange={this.handleWeightChange}
          value={newProduct.weight}
        />
        <TextField
          required
          type="text"
          margin="normal"
          label="Add color"
          id="standard-error-helper-text"
          error={localError.colorError ? true : false}
          helperText={localError.colorError}
          onChange={this.handleColorChange}
          value={newProduct.color}
        />
        <TextField
          required
          type="number"
          margin="normal"
          label="Add quantity"
          id="standard-error-helper-text"
          error={localError.quantityError ? true : false}
          helperText={localError.quantityError}
          onChange={this.handleQuantityChange}
          value={newProduct.quantity}
        />
        <TextField
          required
          type="number"
          margin="normal"
          label="Add price"
          id="standard-error-helper-text"
          error={localError.priceError ? true : false}
          helperText={localError.priceError}
          onChange={this.handlePriceChange}
          value={newProduct.price}
        />
        <Link onClick={this.handleClick} to={"/products/"}>
          <Button
            style={{
              maxWidth: "200px",
              minWidth: "200px"
            }}
            variant="contained"
            color="secondary"
            disabled={!Object.values(localError).every(error => error === null)}
            onClick={() => {
              this.props.addNewProduct(newProduct);
            }}
          >
            CREATE
          </Button>
        </Link>
      </div>
    );
  }
}

export default Create;
