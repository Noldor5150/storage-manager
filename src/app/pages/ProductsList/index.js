import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./index.scss";
import {
  Table,
  TableBody,
  TableCell,
  TableRow,
  Paper,
  Button,
  TextField
} from "@material-ui/core";
import Checkbox from "@material-ui/core/Checkbox";
import ProductsListHead from "../../components/ProductsListHead";

function ProductsList({
  error,
  products = [],
  toggleActive,
  deleteProduct,
  enableEdit,
  saveEditedFromList
}) {
  const keys = Object.keys(products[0]) || {};
  const [inputQuantity, setInputQuantity] = useState(null);
  const [inputPrice, setInputPrice] = useState(null);

  function handleQuantityChange(event) {
    setInputQuantity(event.target.value);
  }

  function handlePriceChange(event) {
    setInputPrice(event.target.value);
  }

  return error ? (
    <div>{error} </div>
  ) : (
    <Paper>
      <Table aria-label="simple table">
        <ProductsListHead keys={keys} />
        <TableBody>
          {products.map(
            ({
              name,
              id,
              ean,
              type,
              weight,
              color,
              isActive,
              quantity,
              price,
              isEdit
            }) => (
              <TableRow key={id}>
                <TableCell component="th" scope="row">
                  {name}
                </TableCell>
                <TableCell align="justify">{ean}</TableCell>
                <TableCell align="justify">{type}</TableCell>
                <TableCell align="justify">{weight}</TableCell>
                <TableCell align="justify">{color}</TableCell>
                <TableCell align="justify" style={{ width: "12%" }}>
                  <TextField
                    type="number"
                    margin="none"
                    disabled={!isEdit}
                    defaultValue={quantity}
                    onChange={handleQuantityChange}
                    onClick={() => {
                      enableEdit(id);
                    }}
                  />
                </TableCell>
                <TableCell align="justify" style={{ width: "12%" }}>
                  <TextField
                    type="number"
                    margin="none"
                    disabled={!isEdit}
                    defaultValue={price}
                    onChange={handlePriceChange}
                    onClick={() => {
                      enableEdit(id);
                    }}
                  />
                </TableCell>
                <TableCell align="justify">
                  <Checkbox
                    color="primary"
                    onChange={() => {
                      toggleActive(id);
                    }}
                    checked={isActive}
                    value="isActive"
                  />
                </TableCell>
                <TableCell align="justify">
                  <Link to={`/products/${id}`}>
                    <Button variant="contained">view</Button>
                  </Link>
                  {isEdit ? (
                    <Button
                      variant="contained"
                      color="secondary"
                      onClick={() => {
                        saveEditedFromList(id, inputQuantity, inputPrice);
                      }}
                    >
                      save
                    </Button>
                  ) : (
                    <Link to={`/products/${id}/edit`}>
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={() => {
                          enableEdit(id);
                        }}
                      >
                        edit
                      </Button>
                    </Link>
                  )}
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => {
                      deleteProduct(id);
                    }}
                  >
                    delete
                  </Button>
                </TableCell>
              </TableRow>
            )
          )}
        </TableBody>
      </Table>
    </Paper>
  );
}

export default ProductsList;
