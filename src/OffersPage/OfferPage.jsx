import { Container, Row, Col } from "react-bootstrap";
import ProductCard from "./ProductCard";
import ServiceCard from "./ServiceCard";
import "./OfferPage.css";

import {
  ArrowCounterclockwise,
  Truck,
  GeoAlt,
  ShieldCheck,
} from "react-bootstrap-icons";

import Offer1 from "../assets/Offer1.jpg";
import Offer2 from "../assets/Offer2.jpg";
import Offer3 from "../assets/Offer3.jpg";
import Offer4 from "../assets/Offer4.jpg";
import servicePattern from "../assets/pattern-4.png"

import EnvatoLogo from "../assets/client.png";

const OffersPage = () => {
  const services = [
    {
      id: 1,
      title: "Return Policy",
      subtitle: "Money back guarantee",
      icon: ArrowCounterclockwise,
    },
    {
      id: 2,
      title: "Free Shipping",
      subtitle: "On all orders over $60.00",
      icon: Truck,
    },
    {
      id: 3,
      title: "Store Locator",
      subtitle: "Find your nearest store",
      icon: GeoAlt,
    },
    {
      id: 4,
      title: "Secure Payments",
      subtitle: "You're on safe and secure",
      icon: ShieldCheck,
    },
  ];

  const products = [
    { id: 1, name: "Bananas", price: 32.0, img: Offer1, rating: 5 },
    { id: 2, name: "Potatos", price: 32.0, img: Offer2, rating: 5 },
    { id: 3, name: "Apples", price: 32.0, img: Offer3, rating: 5 },
    { id: 4, name: "Lettus", price: 32.0, img: Offer4, rating: 5 },
  ];

  return (
    <>
      <section className="offers-section py-5">
        <Container>
          <div className="text-center mb-5">
            <span className="section-subtitle">Special Offers</span>
            <h2 className="section-title">
              Check today’s hot deal <br /> products
            </h2>
          </div>

          <Row className="g-4">
            {products.map((product) => (
              <Col key={product.id} lg={3} md={6}>
                <ProductCard product={product} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>
      <section
        className="services-section"
        style={{ backgroundImage: `url(${servicePattern})` }}
      >
        <Container>
          <Row className="g-4">
            {services.map((service) => (
              <Col key={service.id} lg={3} md={6}>
                <ServiceCard service={service} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section className="client-slider">
        <div className="slider-track">
          {[...Array(6), ...Array(6)].map((_, i) => (
            <div className="slideEvanto" key={i}>
              <img src={EnvatoLogo} alt="envato" />
            </div>
          ))}
        </div>
      </section>

    </>
  );
};

export default OffersPage;
