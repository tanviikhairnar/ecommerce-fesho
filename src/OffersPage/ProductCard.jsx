import { Heart, Basket, StarFill } from "react-bootstrap-icons";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../ProductCart/CartContext";
import { Modal, Button } from "react-bootstrap";

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);
  const navigate = useNavigate();

  const [showConfirm, setShowConfirm] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleConfirmAdd = () => {
    addToCart(product);
    setShowConfirm(false);
    setShowSuccess(true);
  };

  return (
    <>
      <div className="product-card">

        <div className="hover-actions">
          <button
            className="action-btn"
            onClick={() => navigate("/product-details")}
          >
            <Heart size={16} />
          </button>

          <button
            className="action-btn"
            onClick={() => setShowConfirm(true)}
          >
            <Basket size={16} />
          </button>
        </div>

        <div className="image-container">
          <img src={product.img} alt={product.name} />
        </div>

        <h4 className="product-name">{product.name}</h4>

        <div className="product-price">
          ${product.price.toFixed(2)}
        </div>

        <div className="product-rating">
          {[...Array(product.rating)].map((_, i) => (
            <StarFill key={i} size={14} />
          ))}
        </div>
      </div>

      <Modal show={showConfirm} onHide={() => setShowConfirm(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Action</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to add <strong>{product.name}</strong> to cart?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowConfirm(false)}>
            No
          </Button>
          <Button variant="success" onClick={handleConfirmAdd}>
            Yes
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={showSuccess} onHide={() => setShowSuccess(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Success</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {product.name} has been successfully added to your cart.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={() => setShowSuccess(false)}>
            OK
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ProductCard;



