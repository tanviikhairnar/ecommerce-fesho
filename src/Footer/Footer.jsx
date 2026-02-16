import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "./footer.css";
import logo from "../assets/fesho-logo-2.png";

function Footer() {
  return (
    <footer className="footer-section">
      <Container>
        <Row className="gy-4">

          <Col lg={4} md={6}>
            <img src={logo} alt="logo" className="footer-logo mb-3" />

            <p className="footer-text">
              We’re providing every day fresh and quality products for you.
            </p>

            <div className="social-icons">
              <i className="bi bi-twitter"></i>
              <i className="bi bi-facebook"></i>
              <i className="bi bi-pinterest"></i>
              <i className="bi bi-instagram active"></i>
            </div>
          </Col>

          <Col lg={2} md={6}>
            <h5 className="footer-title">Explore</h5>
            <ul className="footer-links">
              <li>About Company</li>
              <li>Our Services</li>
              <li>Become a Seller</li>
              <li>New Products</li>
              <li>Contact</li>
            </ul>
          </Col>

          <Col lg={3} md={6}>
            <h5 className="footer-title">Contact</h5>

            <p><i className="bi bi-telephone-fill"></i> +92 666 888 0000</p>
            <p><i className="bi bi-envelope-fill"></i> needhelp@company.com</p>
            <p><i className="bi bi-geo-alt-fill"></i> 66 road, brooklyn street new york</p>
          </Col>

          <Col lg={3} md={6}>
            <h5 className="footer-title">Newsletter</h5>

            <Form className="newsletter-form">
              <Form.Control
                type="email"
                placeholder="Enter your email"
                className="newsletter-input"
              />

              <Button className="subscribe-btn mt-3">
                SUBSCRIBE
              </Button>
            </Form>
          </Col>
        </Row>

        <div className="footer-bottom text-center">
          © Copyright reserved by kodesolution.com
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
