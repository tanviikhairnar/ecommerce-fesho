import { Container, Row, Col, Button } from "react-bootstrap";
import "./welcomePage.css";

import shape from "../assets/about shape-1.png";
import img1 from "../assets/about-img-1.jpg";
import img2 from "../assets/about-img-2.jpg";

import veg from "../assets/about-veggies.jpg";
import fruit from "../assets/about-fruits.jpg";
import spice from "../assets/about-spices.jpg";
import dried from "../assets/about-drieds.jpg";

import pattern4 from "../assets/pattern-4.png";
import pattern7 from "../assets/pattern-7.png";
import dealBg from "../assets/1.jpg";

import CategoryCard from "./Category";

function WelcomePage() {
  const categories = [
    { title: "Vegetables", img: veg, color: "green" },
    { title: "Fresh Fruits", img: fruit, color: "red" },
    { title: "Spices", img: spice, color: "yellow" },
    { title: "Dried Products", img: dried, color: "brown" },
  ];

  return (
    <>
      <section
        className="WelcomePage-section"
        style={{ backgroundImage: `url(${pattern4})` }}
      >
        <Container fluid>
          <Row className="align-items-center">
            <Col lg={6} className="WelcomePage-images">
              <img src={shape} alt="" className="WelcomePage-shape" />

              <div className="WelcomePage-main-img">
                <img src={img1} alt="organic food" />
              </div>

              <div className="WelcomePage-small-img">
                <img src={img2} alt="healthy food" />
              </div>
            </Col>

            <Col lg={6}>
              <p className="WelcomePage-subtitle">Welcome to Fesho</p>

              <h2 className="WelcomePage-title">
                Be healthy & eat only pure organic food
              </h2>

              <p className="WelcomePage-text">
                Lorem ipsum is simply free text available dolor sit amet,
                consectetur notted adipisicing elit sed do eiusmod tempor
                incididunt simply free ut labore et dolore magna aliqua.
              </p>

              <Row>
                <Col md={6}>
                  <div className="feature">
                    <span className="check">✓</span>
                    <div>
                      <h6>The Best Farmers</h6>
                      <p>Lorem ipsum dolor sited amet consectetur notted.</p>
                    </div>
                  </div>
                </Col>

                <Col md={6}>
                  <div className="feature">
                    <span className="check">✓</span>
                    <div>
                      <h6>Organic Products</h6>
                      <p>Lorem ipsum dolor sited amet consectetur notted.</p>
                    </div>
                  </div>
                </Col>
              </Row>

              <Button className="discover-btn">DISCOVER MORE</Button>
            </Col>
          </Row>
        </Container>
      </section>

      <section
        className="categories-section"
        style={{ backgroundImage: `url(${pattern7})` }}
      >
        <Container>
          <div className="text-center mb-5">
            <span className="section-subtitle">Our Categories</span>
            <h2 className="section-title">What we’re offering</h2>
          </div>

          <Row className="g-4">
            {categories.map((item, index) => (
              <Col md={6} lg={3} key={index}>
                <CategoryCard
                  title={item.title}
                  img={item.img}
                  color={item.color}
                />
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section
        className="deal-section"
        style={{ backgroundImage: `url(${dealBg})` }}
      >
        <Container>
          <Row className="align-items-center">
            <Col lg={6}>
              <span className="deal-subtitle">Weekly Offers</span>

              <h2 className="deal-title">Check deal of the day</h2>

              <p className="deal-text">
                Lorem ipsum dolor sit amet nsectetur cing elit. Suspe ndisse
                suscipit sagittis leo sit met entum estibu dignissim.
              </p>

              <div className="deal-timer">
                {["Days", "Hours", "Minutes", "Seconds"].map((label, i) => (
                  <div className="time-box" key={i}>
                    <h3>00</h3>
                    <span>{label}</span>
                  </div>
                ))}
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="cta-wrapper">
        <Container>
          <div className="cta-box">
            <Row className="align-items-center">
              <Col lg={8} md={7}>
                <span className="WelcomePage-subtitle">Need Our Help?</span>
                <h2 className="cta-title">
                  We’re leader in organic market
                </h2>
              </Col>

              <Col lg={4} md={5} className="text-md-end">
                <Button className="discover-btn">DISCOVER MORE</Button>
              </Col>
            </Row>
          </div>
        </Container>
      </section>

    </>
  );
}

export default WelcomePage;





