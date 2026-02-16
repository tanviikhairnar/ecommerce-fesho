import { Heart, Basket, StarFill } from "react-bootstrap-icons";
import { useContext } from "react";
import { CartContext } from "../ProductCart/CartContext";


const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="product-card">
      
      <div className="hover-actions"> 
        <button className="action-btn">
          <Heart size={16} />
        </button>
  
        <button
          className="action-btn"
          onClick={() => addToCart(product)}
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
  );
};

export default ProductCard;

