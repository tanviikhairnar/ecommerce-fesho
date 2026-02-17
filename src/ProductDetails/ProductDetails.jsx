import { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import ProductCard from "../OffersPage/ProductCard";
import "./productdetail.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import heroBg from "../assets/productsbg.jpg";
import Offer1 from "../assets/Offer1.jpg";
import Offer2 from "../assets/Offer2.jpg";
import Offer3 from "../assets/Offer3.jpg";
import Offer8 from "../assets/8.jpg";

import productImg1 from "../assets/product-details.jpg";
import productImg2 from "../assets/product-details2.jpg";
import productImg3 from "../assets/product-details3.jpg";

const ProductDetails = () => {
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("description");

  const product = {
    name: "Fresh Apple",
    price: 96,
    image: productImg1,
    thumbnails: [productImg1, productImg2, productImg3],
    ref: "4231/406",
    description:
      "Aliquam hendrerit a augue insuscipit. Etiam aliquam massa quis des mauris commodo venenatis ligula commodo leez sed blandit convallis dignissim onec vel pellentesque neque.",
  };

  const [mainImage, setMainImage] = useState(product.image);

  const relatedProducts = [
    { id: 1, name: "Bananas", price: 32, img: Offer1, rating: 5 },
    { id: 2, name: "Potatos", price: 32, img: Offer2, rating: 5 },
    { id: 3, name: "Apples", price: 32, img: Offer3, rating: 5 },
    { id: 4, name: "Carrots", price: 32, img: Offer8, rating: 5 },
  ];

  return (
    <>
      <section
        className="shop-hero"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <Container>
          <h1>Product Details</h1>
          <p>Home / Shop</p>
        </Container>
      </section>

      <section className="py-5">
        <Container>
          <Row className="align-items-start">

            <Col md={6}>
              <img
                src={mainImage}
                alt={product.name}
                className="img-fluid product-main-img"
              />

              <div className="thumb-row mt-3">
                {product.thumbnails.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt={`thumb-${index}`}
                    onClick={() => setMainImage(img)}
                    className="product-thumb"
                  />
                ))}
              </div>
            </Col>

            <Col md={6}>

              <div className="d-flex justify-content-between align-items-center">
                <h2 className="product-title">{product.name}</h2>
                <h4 className="product-price">${product.price}.00</h4>
              </div>

              <div className="product-rating mt-2">
                {[...Array(5)].map((_, i) => (
                  <i key={i} className="bi bi-star-fill"></i>
                ))}
                <span className="ms-2">2 Customer Reviews</span>
              </div>

              <hr />

              <p className="product-description">
                {product.description}
              </p>

              <p><strong>REF.</strong> {product.ref}</p>
              <p className="text-success">Available in store</p>

              <div className="qty-wrapper">
                <span className="qty-label">Choose quantity</span>

                <div className="qty-modern">
                  <span>{quantity}</span>

                  <div className="qty-buttons">
                    <button onClick={() => setQuantity((prev) => prev + 1)}>+</button>
                    <button onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}> −</button>
                  </div>
                </div>
              </div>

              <div className="product-buttons">
                <Button className="discover-btn">
                  ADD TO CART
                </Button>

                <Button className="discover-btn">
                  ADD TO WISHLIST
                </Button>
              </div>

              <div className="share-section">
                <p><strong>Share with friends</strong></p>
                <div className="product-share-icons">
                  <i className="bi bi-twitter"></i>
                  <i className="bi bi-facebook"></i>
                  <i className="bi bi-pinterest"></i>
                  <i className="bi bi-instagram"></i>
                </div>
              </div>

            </Col>
          </Row>

          <div className="product-tabs mt-5">
            <div className="tab-buttons">
              <button
                className={activeTab === "description" ? "active" : ""}
                onClick={() => setActiveTab("description")}
              >
                DESCRIPTION
              </button>

              <button
                className={activeTab === "reviews" ? "active" : ""}
                onClick={() => setActiveTab("reviews")}
              >
                REVIEWS
              </button>
            </div>

            <div className="tab-content mt-4">
              {activeTab === "description" && (
                <>
                  <h4>Description</h4>
                  <p>{product.description}</p>
                  <ul>
                    <li>Nam at elit nec neque suscipit gravida.</li>
                    <li>Aenean egestas orci eu maximus tincidunt.</li>
                    <li>Curabitur vel turpis id tellus cursus laoreet.</li>
                  </ul>
                  <p>All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.</p>
                </>
              )}

              {activeTab === "reviews" && <p>No reviews yet.</p>}
            </div>
          </div>

          <div className="mt-5">
            <h4 className="mb-4">Related Products</h4>

            <Row className="g-4">
              {relatedProducts.map((item) => (
                <Col key={item.id} md={3}>
                  <ProductCard product={item} />
                </Col>
              ))}
            </Row>
          </div>

        </Container>
      </section>
    </>
  );
};

export default ProductDetails;


