import React from "react";
import Item from "./Item";
import Table from "react-bootstrap/Table";

export default function Items({ data, incCount, decCount, handleRemove }) {
  return (
    <Table striped variant="dark" style={{ textAlign: "center" }}>
      <thead>
        <tr>
          <th>Item Name</th>
          <th>Decrease qty.</th>
          <th>Quantity</th>
          <th>Increase qty.</th>
          <th>Remove item</th>
          <th>Price(per qty.)</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => {
          if (item.flag) {
            return (
              <Item
                item={item}
                key={item.id}
                decCount={() => decCount(item.id)}
                incCount={() => incCount(item.id)}
                handleRemove={() => handleRemove(item.id)}
              />
            );
          }
          return null;
        })}
      </tbody>
    </Table>
  );
}
