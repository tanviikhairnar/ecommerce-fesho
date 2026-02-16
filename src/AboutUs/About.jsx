import { Container, Row, Col, Button } from "react-bootstrap";
import { ArrowRight } from "react-bootstrap-icons";
import { useEffect, useState } from "react";

import "./aboutus.css";
import heroBg from "../assets/aboutbg.jpg";

import mainImg from "../assets/about-img-2-1.jpg";
import smallImg from "../assets/about-img-2-2.jpg";
import iconImg from "../assets/testimonial-icon.png";

import img1 from "../assets/gallery-1.jpg";
import img2 from "../assets/gallery-2.jpg";
import img3 from "../assets/gallery-3.jpg";
import img4 from "../assets/gallery-4.jpg";
          
import moneybag from "../assets/money-bag.png"
import ship from "../assets/ship.png"
import store from "../assets/store.png"
import shield from "../assets/protection.png"

const About = () => {
  const items = [
    { id: 1, img: img1 },
    { id: 2, img: img2 },
    { id: 3, img: img3 },
    { id: 4, img: img4 },
  ];

  const Counter = ({ target }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      const duration = 1800;
      let startTime = null;

      const animate = (timestamp) => {
        if (!startTime) startTime = timestamp;

        const progress = timestamp - startTime;
        const percent = Math.min(progress / duration, 1);

        setCount(Math.floor(percent * target));

        if (percent < 1) {
          requestAnimationFrame(animate);
        }
      };

      requestAnimationFrame(animate);
    }, [target]);

    return <h2 className="stat-number">{count}</h2>;
  };

  return (
    <>
      <section
        className="about-hero"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="hero-overlay">
          <Container>
            <h1>About Us</h1>
            <p>Home / About</p>
          </Container>
        </div>
      </section>

      <section className="about-wrapper">
        <Container>
          <Row className="align-items-center">
            <Col lg={6}>
              <div className="image-area">
                <div className="green-bar"></div>
                <img src={mainImg} alt="main" className="main-img" />
                <img src={smallImg} alt="small" className="small-img" />
                <div className="yellow-shape"></div>
              </div>
            </Col>

            <Col lg={6}>
              <span className="section-subtitle">Get to Know Us</span>

              <h2 className="section-title">
                Proving the pure healthy <br /> products
              </h2>

              <h5 className="section-highlight">
                Natural products for lovers of healthy food.
              </h5>

              <p className="section-text">
                Dislike men who are so beguiled demoraliz worlds ed by the
                charms of pleasure of the moment.
              </p>

              <div className="about-points-wrapper">
                <div className="icon-circle">
                  <img src={iconImg} alt="icon" />
                </div>

                <ul className="about-points">
                  <li>
                    <ArrowRight /> Fresh and quality products
                  </li>
                  <li>
                    <ArrowRight /> Fresh and pure healthy food
                  </li>
                  <li>
                    <ArrowRight /> Don’t panic go for organic
                  </li>
                </ul>
              </div>

              <Button className="discover-btn">DISCOVER MORE</Button>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="gallery-section">
        <Container fluid>
          <Row>
            {items.map((item) => (
              <Col lg={3} md={6} key={item.id} className="mb-4">
                <div className="gallery-card">
                  <img src={item.img} alt="gallery" />

                  <div className="overlay">
                    <div className="overlay-content">
                      <span>Organic</span>
                      <h4>Fresh & Pure</h4>
                    </div>
                    <button className="arrow-btn">
                      <ArrowRight />
                    </button>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

    
<section className="fesho-stats">
  <Container>
    <Row className="text-center stats-row">
      <Col lg={3} md={6} className="stat-item">
        <Counter target={6420} />
        <p>Agriculture Products</p>
      </Col>

      <Col lg={3} md={6} className="stat-item">
        <Counter target={8800} />
        <p>Projects Completed</p>
      </Col>

      <Col lg={3} md={6} className="stat-item">
        <Counter target={9280} />
        <p>Satisfied Clients</p>
      </Col>

      <Col lg={3} md={6} className="stat-item">
        <Counter target={1800} />
        <p>Experts Farmers</p>
      </Col>
    </Row>

    <div className="features-card">
      <Row className="text-center">
        <Col md={3} className="feature-item">
          <img src={moneybag} alt="moneybag" />
          <h6>Return Policy</h6>
        </Col>

        <Col md={3} className="feature-item">
          <img src={ship} alt="ship" />
          <h6>Free Shipping</h6>
        </Col>
        <Col md={3} className="feature-item">
          <img src={store} alt="store" />
          <h6>Store Locator</h6>
        </Col>

        <Col md={3} className="feature-item">
          <img src={shield} alt="shield" />
          <h6>Secure Payments</h6>
        </Col>
      </Row>
    </div>
  </Container>
</section>

    </>
  );
};

export default About;
