import { useState, useEffect } from "react";
import data from "./db.json";
import Items from "./components/Items";
import Total from "./components/Total";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { Container, Row, Col } from "react-bootstrap";

const LOCAL_STORAGE_KEY = "shopcart.items";

function App() {
  const [updData, setData] = useState(data);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  useEffect(() => {
    const localdata = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (localdata) setData(localdata);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updData));
  }, [updData]);

  function decCount(id) {
    setData(
      updData.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: item.quantity !== 0 ? item.quantity - 1 : item.quantity,
            }
          : item
      )
    );
  }

  function incCount(id) {
    setData(
      updData.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  }

  function handleRemove(id) {
    setData(
      updData.map((item) => (item.id === id ? { ...item, flag: false } : item))
    );
    setShow(true);
  }

  return (
    <>
      <Container>
        <Row className="my-5 text-center">
          <h1>Order Details</h1>
        </Row>
        <Row>
          <Col
            className="my-2"
            xs={{ span: 10, order: 2 }}
            md={{ span: 9, order: 1 }}
          >
            {updData.filter((item) => {
              if (item.flag) return item;
              return null;
            }).length ? (
              <Items
                data={updData}
                decCount={decCount}
                incCount={incCount}
                handleRemove={handleRemove}
              />
            ) : (
              <div className="text-center">
                <h5>All items has been removed from card.</h5>
                <Button varriant="primary" onClick={() => setData(data)}>
                  Start Shopping Again
                </Button>
              </div>
            )}
          </Col>
          <Col
            className="my-2"
            xs={{ span: 10, order: 1 }}
            md={{ span: 3, order: 2 }}
          >
            <Total data={updData} />
          </Col>
        </Row>
      </Container>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>One item has been removed from cart</Modal.Title>
        </Modal.Header>
        <Modal.Footer>
          <Button variant="success" onClick={handleClose}>
            Continue Shopping
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default App;
