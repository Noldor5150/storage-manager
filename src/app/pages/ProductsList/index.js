import React from 'react';
import './index.scss';
import { Table, TableBody, TableCell, TableRow, Paper } from '@material-ui/core';
import Checkbox from '@material-ui/core/Checkbox';
import ProductsListHead from '../../components/ProductsListHead';

function ProductsList({ error, products = [], callbackFromParent, toggleActive, deleteProduct }) {
  const keys = Object.keys(products[0]);

  return error ? (
    <div>{error}</div>
  ) : (
    <Paper>
      <Table aria-label="simple table">
        <ProductsListHead keys={keys} />
        <TableBody>
          {products.map(({ name, id, ean, type, weight, color, isActive, quantity, price }) => (
            <TableRow key={id}>
              <TableCell component="th" scope="row">
                {name}
              </TableCell>
              <TableCell align="justify">{ean}</TableCell>
              <TableCell align="justify">{type}</TableCell>
              <TableCell align="justify">{weight}</TableCell>
              <TableCell align="justify">{color}</TableCell>
              <TableCell align="justify">{quantity}</TableCell>
              <TableCell align="justify">{price}</TableCell>
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
                {/* <Button name="view" />
                     <Button name="edit" />
                     <Button name="delete" /> */}

                <button
                  onClick={() => {
                    callbackFromParent(id);
                  }}
                >
                  view
                </button>
                <button
                  onClick={() => {
                    callbackFromParent(id);
                  }}
                >
                  edit
                </button>
                <button
                  onClick={() => {
                    deleteProduct(id);
                  }}
                >
                  delete
                </button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}

export default ProductsList;
