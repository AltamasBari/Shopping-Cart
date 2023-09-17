import React from "react";
import Card from "react-bootstrap/Card";

export default function Total({ data }) {
  let total = 0;
  let num = 0;
  let d = 0;
  let td = 0;
  let final_amt = 0;

  data.forEach((item) => {
    if (item.flag) {
      total = total + item.price * item.quantity;
      num = num + item.quantity;
      d = d + (item.discount / 100) * (item.price * item.quantity);
      if (item.type === "fiction") {
        td = td + 0.15 * (item.price * item.quantity);
      }
    }
  });

  final_amt = total - (d + td);

  return (
    <>
      <Card bg="light" text="dark">
        <Card.Header className="h3">Total </Card.Header>
        <Card.Text className="mx-3">
          Items({num}): ₹{total}
        </Card.Text>
        <Card.Text className="mx-3">Discount(-): ₹{d}</Card.Text>
        <Card.Text className="mx-3">Type discount(-): ₹{td}</Card.Text>
        <Card.Footer className="h5">Total amount: ₹{final_amt}</Card.Footer>
      </Card>
    </>
  );
}
