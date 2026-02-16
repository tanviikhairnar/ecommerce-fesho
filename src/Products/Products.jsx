import { Container, Row, Col, Form, Button } from "react-bootstrap";
import ProductCard from "../OffersPage/ProductCard";
import "./Products.css";

import Offer1 from "../assets/Offer1.jpg";
import Offer2 from "../assets/Offer2.jpg";
import Offer3 from "../assets/Offer3.jpg";
import Offer4 from "../assets/Offer4.jpg";
import Offer5 from "../assets/5.jpg";
import Offer6 from "../assets/6.jpg";
import Offer7 from "../assets/7.jpg";
import Offer8 from "../assets/8.jpg";

import heroBg from "../assets/productsbg.jpg";

const Products = () => {
  const products = [
    { id: 1, name: "Bananas", price: 32.0, img: Offer1, rating: 5 },
    { id: 2, name: "Potatos", price: 32.0, img: Offer2, rating: 5 },
    { id: 3, name: "Apples", price: 32.0, img: Offer3, rating: 5 },
    { id: 4, name: "Lettus", price: 32.0, img: Offer4, rating: 5 },
    { id: 5, name: "Grape", price: 32.0, img: Offer5, rating: 5 },
    { id: 6, name: "Orange", price: 32.0, img: Offer6, rating: 5 },
    { id: 7, name: "Onions", price: 32.0, img: Offer7, rating: 5 },
    { id: 8, name: "Carrots", price: 32.0, img: Offer8, rating: 5 },
  ];

  return (
    <>
      <section
        className="shop-hero"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <Container>
          <h1>Shop</h1>
          <p>Home / Products</p>
        </Container>
      </section>
      <section className="shop-section py-5">
        <Container>
          <Row>
            <Col lg={3}>
              <div className="sidebar-box">
                <Form.Control placeholder="Search..." className="mb-4" />

                <h5>Categories</h5>
                <ul className="category-list">
                  <li>Agriculture</li>
                  <li>Beverages</li>
                  <li>Fruits</li>
                  <li>Food</li>
                  <li>Dairy</li>
                  <li>Organic</li>
                </ul>
              </div>
            </Col>
            <Col lg={9}>
              <Row className="g-4">
                {products.map((product) => (
                  <Col key={product.id} lg={4} md={6}>
                    <ProductCard product={product} />
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Products;

