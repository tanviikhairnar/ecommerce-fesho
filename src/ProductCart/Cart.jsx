import { useContext, useState } from "react";
import { Container, Row, Col, Modal, Button } from "react-bootstrap";
import { CartContext } from "./CartContext";
import heroBg from "../assets/productsbg.jpg";
import "./cart.css";

const Cart = () => {
  const { cartItems, increaseQty, decreaseQty, removeItem } =
    useContext(CartContext);

  const [showModal, setShowModal] = useState(false);
  const [selectedItemId, setSelectedItemId] = useState(null);

  const shipping = 70;

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const total = subtotal + shipping;

  const handleRemoveClick = (id) => {
    setSelectedItemId(id);
    setShowModal(true);
  };

  const confirmRemove = () => {
    removeItem(selectedItemId);
    setShowModal(false);
    setSelectedItemId(null);
  };

  return (
    <>
      <section
        className="shop-hero"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <Container>
          <h1>Cart</h1>
          <p>Home / Cart</p>
        </Container>
      </section>

      <section className="cart-section py-5">
        <Container>
          <div className="cart-wrapper">
            <table className="custom-cart-table">
              <thead>
                <tr>
                  <th></th>
                  <th>Photo</th>
                  <th className="text-start">Product Name</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Total</th>
                </tr>
              </thead>

              <tbody>
                {cartItems.length === 0 ? (
                  <tr>
                    <td colSpan="6" className="text-center py-5">
                      Your cart is empty
                    </td>
                  </tr>
                ) : (
                  cartItems.map((item) => (
                    <tr key={item.id}>
                      <td>
                        <div
                          className="remove-circle"
                          onClick={() => handleRemoveClick(item.id)}
                        >
                          ×
                        </div>
                      </td>

                      <td>
                        <img
                          src={item.img}
                          alt={item.name}
                          className="cart-img"
                        />
                      </td>

                      <td className="text-start">
                        <h6 className="product-name">{item.name}</h6>
                      </td>

                      <td className="price">
                        ${item.price.toFixed(2)}
                      </td>

                      <td>
                        <div className="qty-modern">
                          <span>{item.quantity}</span>

                          <div className="qty-buttons">
                            <button onClick={() => increaseQty(item.id)}>
                              +
                            </button>

                            <button onClick={() => decreaseQty(item.id)}>
                              −
                            </button>
                          </div>
                        </div>
                      </td>

                      <td className="total-price">
                        ${(item.price * item.quantity).toFixed(2)}
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>

          <Row className="justify-content-end mt-5">
            <Col md={5}>
              <div className="cart-totals">
                <h5>Cart Totals</h5>

                <div className="totals-row">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>

                <div className="totals-row">
                  <span>Shipping</span>
                  <span>${shipping.toFixed(2)}</span>
                </div>

                <div className="totals-divider"></div>

                <div className="totals-row total">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>

                <button className="checkout-btn">
                  Proceed To Checkout
                </button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Remove Item</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          Are you sure you want to remove this item from your cart?
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            No
          </Button>

          <Button variant="success" onClick={confirmRemove}>
            Yes, Remove
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Cart;





