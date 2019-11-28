import React from "react";
import "./index.scss";
import { TableCell, TableHead, TableRow } from "@material-ui/core";

function ProductsListHead({ products }) {
  return products.length === 0 ? (
    <TableHead>
      <TableRow>
        <TableCell>You deleted all your products, create new ones </TableCell>
      </TableRow>
    </TableHead>
  ) : (
    <TableHead>
      <TableRow>
        <TableCell align="justify">Name</TableCell>
        <TableCell align="justify">EAN</TableCell>
        <TableCell align="justify">Type</TableCell>
        <TableCell align="justify">Weight</TableCell>
        <TableCell align="justify">Color</TableCell>
        <TableCell align="justify">Quantity</TableCell>
        <TableCell align="justify">Price</TableCell>
        <TableCell align="justify">Active</TableCell>
        <TableCell align="justify">Actions</TableCell>
      </TableRow>
    </TableHead>
  );
}

export default ProductsListHead;
