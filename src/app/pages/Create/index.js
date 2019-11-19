import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, TextField } from "@material-ui/core";
import "./index.scss";

function Create({ error, addNewProduct }) {
  const [inputName, setInputName] = useState(null);
  const [inputId, setInputId] = useState(null);
  const [inputEan, setInputEan] = useState(null);
  const [inputType, setInputType] = useState(null);
  const [inputWeight, setInputWeight] = useState(null);
  const [inputColor, setInputColor] = useState(null);
  const [inputQuantity, setInputQuantity] = useState(null);
  const [inputPrice, setInputPrice] = useState(null);

  function handleNameChange(event) {
    setInputName(event.target.value);
  }
  function handleIdChange(event) {
    setInputId(event.target.value);
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
    <div className="Create">
      <TextField
        required
        type="text"
        margin="normal"
        label="Add name"
        onChange={handleNameChange}
      />
      <TextField
        required
        type="text"
        margin="normal"
        label="Add Id"
        helperText={error}
        onChange={handleIdChange}
      />

      <TextField
        required
        type="number"
        margin="normal"
        label="Add ean"
        onChange={handleEanChange}
      />
      <TextField
        required
        type="text"
        margin="normal"
        label="Add type"
        onChange={handleTypeChange}
      />
      <TextField
        required
        type="number"
        margin="normal"
        label="Add weight"
        onChange={handleWeightChange}
      />
      <TextField
        required
        type="text"
        margin="normal"
        label="Add color"
        onChange={handleColorChange}
      />

      <TextField
        required
        type="number"
        margin="normal"
        label="Add quantity"
        onChange={handleQuantityChange}
      />
      <TextField
        required
        type="number"
        margin="normal"
        label="Add price"
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
            addNewProduct(
              inputId,
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
          CREATE
        </Button>
      </Link>
    </div>
  );
}

export default Create;
