import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./index.scss";
import {
  Button,
  TextField,
  FormControlLabel,
  Checkbox
} from "@material-ui/core";

function Edit({ product, toggleActive, saveEditedFromEdit }) {
  const {
    name,
    id,
    ean,
    type,
    weight,
    color,
    isActive,
    quantity,
    price
  } = product;
  const [inputName, setInputName] = useState(null);
  const [inputEan, setInputEan] = useState(null);
  const [inputType, setInputType] = useState(null);
  const [inputWeight, setInputWeight] = useState(null);
  const [inputColor, setInputColor] = useState(null);
  const [inputQuantity, setInputQuantity] = useState(null);
  const [inputPrice, setInputPrice] = useState(null);

  function handleNameChange(event) {
    setInputName(event.target.value);
  }
  function handleEanChange(event) {
    setInputEan(event.target.value);
  }
  function handleTypeChange(event) {
    setInputType(event.target.value);
  }
  function handleWeightChange(event) {
    setInputWeight(event.target.value);
  }
  function handleColorChange(event) {
    setInputColor(event.target.value);
  }
  function handleQuantityChange(event) {
    setInputQuantity(event.target.value);
  }

  function handlePriceChange(event) {
    setInputPrice(event.target.value);
  }

  return (
    <div className="Edit">
      <TextField
        type="text"
        margin="normal"
        label="change name"
        defaultValue={name}
        onChange={handleNameChange}
      />

      <FormControlLabel
        control={
          <Checkbox
            color="primary"
            onChange={() => {
              toggleActive(id);
            }}
            checked={isActive}
            value="isActive"
          />
        }
        label="Active"
      />
      <TextField
        type="number"
        margin="normal"
        label="change ean"
        defaultValue={ean}
        onChange={handleEanChange}
      />
      <TextField
        type="text"
        margin="normal"
        label="change type"
        defaultValue={type}
        onChange={handleTypeChange}
      />
      <TextField
        type="number"
        margin="normal"
        label="change weight"
        defaultValue={weight}
        onChange={handleWeightChange}
      />
      <TextField
        type="text"
        margin="normal"
        label="change color"
        defaultValue={color}
        onChange={handleColorChange}
      />

      <TextField
        type="number"
        margin="normal"
        label="change quantity"
        defaultValue={quantity}
        onChange={handleQuantityChange}
      />
      <TextField
        type="number"
        margin="normal"
        label="change price"
        defaultValue={price}
        onChange={handlePriceChange}
      />
      <Link to={`/products/`}>
        <Button
          style={{
            maxWidth: "200px",
            minWidth: "200px"
          }}
          variant="contained"
          color="secondary"
          onClick={() => {
            saveEditedFromEdit(
              id,
              inputName,
              inputEan,
              inputType,
              inputWeight,
              inputColor,
              inputQuantity,
              inputPrice
            );
          }}
        >
          save
        </Button>
      </Link>
    </div>
  );
}

export default Edit;
