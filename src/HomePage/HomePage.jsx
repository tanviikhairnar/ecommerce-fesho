import { Container, Row, Col, Button } from "react-bootstrap";
import "./homePage.css";

import bg from "../assets/feshobackground.jpg";
import heroImg from "../assets/hero-img.png";

import obj1 from "../assets/object-1.png";
import obj2 from "../assets/object-2.png";
import obj3 from "../assets/object-3.png";
import obj5 from "../assets/object-5.png";
import obj6 from "../assets/object-6.png";
import obj4 from "../assets/object-4.png";

import banner1 from "../assets/top-banner-1.png";
import banner2 from "../assets/top-banner-2.png";
import banner3 from "../assets/top-banner-3.png";

function HomePage() {
  return (
    <>
      <section className="hero">
        <img src={bg} alt="" className="hero-bg" />

        <Container>
          <Row className="hero-content align-items-center">
            <Col lg={6} className="hero-left">
              <p className="organic">Only Organic Products</p>

              <h1 className="hero-title">
                Healthy <br /> Organic Food
              </h1>

              <Button className="discover-btn">DISCOVER MORE</Button>
            </Col>

            <Col lg={6} className="hero-right">
              <img src={heroImg} alt="" className="hero-main" />

              <img src={obj4} alt="" className="Organicbadge"/>
              <img src={obj5} alt="" className="blob" />
              <img src={obj1} alt="" className="obj broccoli" />
              <img src={obj2} alt="" className="obj leaf" />
              <img src={obj3} alt="" className="obj tomato" />
              <img src={obj6} alt="" className="obj arrow"/>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="home-banners">
        <Container fluid>
          <Row className="g-4">

            <Col lg={4} md={6}>
              <div className="banner-card yellow">
                <div className="banner-content">
                  <span>100% Organic</span>
                  <h3>
                    Quality Organic <br /> Food Store
                  </h3>
                  <Button className="banner-btn white">SHOP NOW</Button>
                </div>

                <div className="banner-img">
                  <img src={banner1} alt="" />
                </div>
              </div>
            </Col>

            <Col lg={4} md={6}>
              <div className="banner-card green">
                <div className="banner-content">
                  <span>100% Organic</span>
                  <h3>
                    Healthy Products <br /> Everyday
                  </h3>
                  <Button className="banner-btn yellow">SHOP NOW</Button>
                </div>

                <div className="banner-img">
                  <img src={banner2} alt="" />
                </div>
              </div>
            </Col>

            <Col lg={4} md={6}>
              <div className="banner-card dark">
                <div className="banner-content">
                  <span>100% Organic</span>
                  <h3>
                    Pure Natural <br /> Products
                  </h3>
                  <Button className="banner-btn green">SHOP NOW</Button>
                </div>

                <div className="banner-img">
                  <img src={banner3} alt="" />
                </div>
              </div>
            </Col>

          </Row>
        </Container>
      </section>
    </>
  );
}

export default HomePage;


